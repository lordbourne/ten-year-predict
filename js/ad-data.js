$(document).ready(function() {
  var f_zxz = parseInt(localStorage.getItem('zxzrs'));
  var f_m_as = parseInt(localStorage.getItem('m_as'));
  var f_as_as = parseInt(localStorage.getItem('as_as'));
  var f_m_ss = parseInt(localStorage.getItem('m_ss'));
  var f_ss_as = parseInt(localStorage.getItem('ss_as'));
  var f_hj1 = parseInt(localStorage.getItem('hj1'));
  var f_m_um = parseInt(localStorage.getItem('m_um'));
  var f_um_um = parseInt(localStorage.getItem('um_um'));
  var f_hj2 = parseInt(localStorage.getItem('hj2'));
  var f_hj = parseInt(localStorage.getItem('hj'));
  var f_sy = parseInt(localStorage.getItem('sy'));

  var nsr = parseInt(localStorage.getItem('nsr')) / 10000;

  var h = new Array(14),
      hb = new Array(14),
      hc = new Array(14);

  h[1] = Math.round(f_zxz * 0.33 * 10000) / 10000.0; //f_zxz*0.3*1.1
  h[2] = Math.round((f_m_as + f_as_as) * 0.198 * 10000) / 10000.0; //(f_m_as+f_as_as)*(0.3-0.12)*1.1
  h[3] = Math.round((f_m_ss + f_ss_as) * 0.132 * 10000) / 10000.0; //(f_m_ss+f_ss_as)*(0.3-0.18)*1.1
  h[4] = Math.round(f_hj2 * 0.07 * 10000) / 10000.0; //f_hj2*(0.3-0.23)
  h[5] = Math.round(f_m_as * 0.06 * 10000) / 10000.0; //f_m_as*0.06
  h[6] = Math.round((f_m_ss + f_ss_as) * 0.03 * 10000) / 10000.0; //(f_m_ss+f_ss_as)*0.03
  h[7] = Math.round(f_hj2 * 0.015 * 10000) / 10000.0; //hj2*0.015
  h[8] = Math.round((f_hj * 0.04 + 0.35) * 10000) / 10000.0; //3500/10000+人力及生产力!K18*4%
  h[9] = Math.round((f_hj1 * 0.0308) * 10000) / 10000.0; //人力及生产力!G18*2.8%*110%
  h[10] = f_sy / 10000;
  h[11] = h[10] * 0.8;
  h[12] = h[10]; //IF(C15*10000>=5000,9%,IF(C15*10000>=3000,7%,IF(C15*10000>=1500,4.5%,IF(C15*10000>=800,2.5%,0))))*110%

  if (h[12] >= 0.5) {
      h[12] = h[10] * 0.09;
  } else if (h[12] >= 0.3) {
      h[12] = h[10] * 0.07;
  } else if (h[12] >= 0.15) {
      h[12] = h[10] * 0.045;
  } else if (h[12] >= 0.08) {
      h[12] = h[10] * 0.025;
  } else {
      h[12] = 0;
  }
  h12=Math.round(h12*10000)/10000.0;

  for (var i=1; i<=12; i++) {
    var $h = $('#h' + i);
    hb[i] = Math.round(h[i] * 100) / 100.0;// 月收入
    $h.find('span').filter(':eq(0)').html(hb[i]);
    hc[i] = Math.round(hb[i] * 12 * 100) / 100.0;// 年收入
    $h.find('span').filter(':eq(1)').html(hc[i]);
  }

  // 求和函数, 将数组的某个连续的区间的值相加
  var sum = function (arr, from, to) {
    var s = 0;
    for (var i=from; i<=to; i++) {
      s += arr[i];
    }
    return s;
  };
  // 结果转换：Math.round(x*100)/100.0;
  var conv = function (x) {
    return Math.round(x*100)/100.0;
  };
  // 求和并转换
  var sumConv = function (arr, from, to) {
    return conv(sum(arr, from, to));
  };

  // 组织利益合计
  hb[13] = sumConv(hb, 1, 9);
  hc[13] = sumConv(hb, 1, 9);
  $h.siblings().filter(':eq(0)').html(hb[i]);
  $('#h13').find('span[data-h13_m]').html(hb[13]);
  $('#h13').find('span[data-h13_y]').html(hc[13]);

  // 管理津贴合计
  $('#gljt').find('span[data-gljt_m]').html(sumConv(hb, 1, 4));
  $('#gljt').find('span[data-gljt_y]').html(sumConv(hc, 1, 4));
  // 育成津贴合计
  $('#ycjt').find('span[data-ycjt_m]').html(sumConv(hb, 5, 7));
  $('#ycjt').find('span[data-ycjt_y]').html(sumConv(hc, 5, 7));
  // 个人利益合计
  $('#grly').find('span[data-grly_m]').html(sumConv(hb, 10, 12));
  $('#grly').find('span[data-grly_y]').html(sumConv(hc, 10, 12));
  // 总计
  $('#total').find('span[data-total_m]').html(sumConv(hb, 1, 12));
  $('#total').find('span[data-total_y]').html(sumConv(hc, 1, 12));

  var nsr_cur = conv(nsr);// 目前年收入
  var nsr_10 = sum(hc, 1, 12);// 10年后年收入
  var nsr_diff = conv(sum(hc, 1, 12) - nsr);// 提高了
  $('#nsr_cur').html(nsr_cur);
  $('#nsr_10').html(nsr_10);
  $('#nsr_diff').html(nsr_diff);
});


