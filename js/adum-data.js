$(document).ready(function() {
  var flag = location.pathname.match(/.{2}-data/g)[0];

  var f_zxz   = parseInt(localStorage.getItem('m_zxzrs_fyc'));
  var f_m_as  = parseInt(localStorage.getItem('m_as_fyc'));
  var f_as_as = parseInt(localStorage.getItem('as_as_fyc'));
  var f_m_ss  = parseInt(localStorage.getItem('m_ss_fyc'));
  var f_ss_as = parseInt(localStorage.getItem('ss_as_fyc'));
  var f_hj1   = parseInt(localStorage.getItem('hj1_fyc'));
  var f_m_um  = parseInt(localStorage.getItem('m_um_fyc'));
  var f_um_um = parseInt(localStorage.getItem('um_um_fyc'));
  var f_hj2   = parseInt(localStorage.getItem('hj2_fyc'));
  var f_hj    = parseInt(localStorage.getItem('hj_fyc'));

  var sy    = parseInt(localStorage.getItem('sy'));
  var nsr     = parseInt(localStorage.getItem('nsr')) / 10000;

  var h = new Array(14),
      hb = new Array(14),
      hc = new Array(14);

  h[1] = Math.round(f_zxz * 0.308 * 10000) / 10000.0;// f_zxz * 0.28 * 1.1
  if (flag == "um-data") {// um-data.html 页
    h[2] = Math.round((f_m_as + f_as_as) * 0.176 * 10000) / 10000.0;// (f_m_as + f_as_as) * (0.3-0.12) * 1.1
    h[3] = Math.round((f_m_ss + f_ss_as) * 0.11 * 10000) / 10000.0;// (f_m_ss + f_ss_as) * (0.3-0.18) * 1.1
    // h[4] = Math.round(f_hj2 * 0.07 * 10000)/10000.0;//f_hj2*(0.3-0.23)
    h[4] = 0;
    h[5] = Math.round(f_m_as * 0.06 * 10000) / 10000.0;// f_m_as * 0.06
    h[6] = Math.round((f_m_ss + f_ss_as) * 0.03 * 10000) / 10000.0;// (f_m_ss + f_ss_as) * 0.03
    h[7] = Math.round(f_hj2 * 0.015 * 10000) / 10000.0;// hj2 * 0.015
    h[8] = Math.round(0.35 * 10000) / 10000.0;// 3500/10000 + 人力及生产力!K18 * 4%
  } else {// ad-data.html 页
    h[1] = Math.round(f_zxz*0.33*10000)/10000.0;//f_zxz*0.3*1.1
    h[2] = Math.round((f_m_as + f_as_as) * 0.198 * 10000) / 10000.0; //(f_m_as+f_as_as)*(0.3-0.12)*1.1
    h[3] = Math.round((f_m_ss + f_ss_as) * 0.132 * 10000) / 10000.0; //(f_m_ss+f_ss_as)*(0.3-0.18)*1.1
    h[4] = Math.round(f_hj2 * 0.07 * 10000) / 10000.0; //f_hj2*(0.3-0.23)
    h[5] = Math.round(f_m_as * 0.06 * 10000) / 10000.0; //f_m_as*0.06
    h[6] = Math.round((f_m_ss + f_ss_as) * 0.03 * 10000) / 10000.0; //(f_m_ss+f_ss_as)*0.03
    h[7] = Math.round(f_hj2 * 0.015 * 10000) / 10000.0; //hj2*0.015
    h[8] = Math.round((f_hj * 0.04 + 0.35) * 10000) / 10000.0; //3500/10000+人力及生产力!K18*4%
  }

  h[9] = Math.round((f_hj1 * 0.0308) * 10000) / 10000.0; //人力及生产力!G18*2.8%*110%
  h[10] = sy / 10000;
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
  h[12] = Math.round(h[12] * 10000) / 10000.0;

  for (var i=1; i<=12; i++) {
    // var $h = $('#h' + i);
    hb[i] = Math.round(h[i] * 100) / 100.0;// 月收入
    // $h.find('span').filter(':eq(0)').html(hb[i]);
    hc[i] = Math.round(hb[i] * 12 * 100) / 100.0;// 年收入
    // $h.find('span').filter(':eq(1)').html(hc[i]);
  }

  // 数组部分求和, 将数组的某个连续的区间的值相加
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
  hc[13] = sumConv(hc, 1, 9);



// 构造 Json 数据用于填充
  var result  = {};
  result.nsr_cur = conv(nsr);// 目前年收入
  result.nsr_10 = sum(hc, 1, 12);// 10年后年收入
  result.nsr_diff = conv(sum(hc, 1, 12) - nsr);// 提高了

  result.h1b  = hb[1];
  result.h2b  = hb[2];
  result.h3b  = hb[3];
  result.h4b  = hb[4];
  result.h5b  = hb[5];
  result.h6b  = hb[6];
  result.h7b  = hb[7];
  result.h8b  = hb[8];
  result.h9b  = hb[9];
  result.h10b = hb[10];
  result.h11b = hb[11];
  result.h12b = hb[12];
  result.h13b = hb[13];

  result.h1c  = hc[1];
  result.h2c  = hc[2];
  result.h3c  = hc[3];
  result.h4c  = hc[4];
  result.h5c  = hc[5];
  result.h6c  = hc[6];
  result.h7c  = hc[7];
  result.h8c  = hc[8];
  result.h9c  = hc[9];
  result.h10c = hc[10];
  result.h11c = hc[11];
  result.h12c = hc[12];
  result.h13c = hc[13];

  result.gljt_m   = sumConv(hb, 1, 4);
  result.gljt_y   = sumConv(hc, 1, 4);

  result.ycjt_m   = sumConv(hb, 5, 7);
  result.ycjt_y   = sumConv(hc, 5, 7);

  result.grly_m   = sumConv(hb, 10, 12);
  result.grly_y   = sumConv(hc, 10, 12);

  result.total_m  = sumConv(hb, 1, 12);
  result.total_y  = sumConv(hc, 1, 12);

  // 获取模板并填充数据
  $.ajax({
    url: 'tpl/tpl-adum-data.html',
    type: 'GET',
    dataType: 'html',
    success: function (tpl) {
      var html = fillData(tpl, result);
      $('header').after($(html));
    }
  });

});

// $('#h13').find('span[data-h13_m]').html(hb[13]);
// $('#h13').find('span[data-h13_y]').html(hc[13]);

// 管理津贴合计
// $('#gljt').find('span[data-gljt_m]').html(sumConv(hb, 1, 4));
// $('#gljt').find('span[data-gljt_y]').html(sumConv(hc, 1, 4));
// 育成津贴合计
// $('#ycjt').find('span[data-ycjt_m]').html(sumConv(hb, 5, 7));
// $('#ycjt').find('span[data-ycjt_y]').html(sumConv(hc, 5, 7));
// 个人利益合计
// $('#grly').find('span[data-grly_m]').html(sumConv(hb, 10, 12));
// $('#grly').find('span[data-grly_y]').html(sumConv(hc, 10, 12));
// 总计
// $('#total').find('span[data-total_m]').html(sumConv(hb, 1, 12));
// $('#total').find('span[data-total_y]').html(sumConv(hc, 1, 12));
//
// $('#nsr_cur').html(nsr_cur);
// $('#nsr_10').html(nsr_10);
// $('#nsr_diff').html(nsr_diff);
