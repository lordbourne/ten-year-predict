$(document).ready(function() {
  var zxzrs = parseInt(localStorage.getItem('zxzrs'));// 直辖组现有人力
  var zxbrs = parseInt(localStorage.getItem('zxbrs'));// 直辖部现有人力
  var sxrs = parseInt(localStorage.getItem('sxrs'));// 所辖人力
  var zxas = parseInt(localStorage.getItem('zxas'));// 直辖 AS
  var zxss = parseInt(localStorage.getItem('zxss'));// 直辖 SS
  var zxum = parseInt(localStorage.getItem('zxum'));// 直辖 UM
  var zxad = parseInt(localStorage.getItem('zxas'));// 直辖 AD(同级育成 AD)

  var zjzy = parseInt(localStorage.getItem('zjzy'));// 每年个人直接增员
  var lcv13 = parseInt(localStorage.getItem('lcv13')) / 100;//13个月继续率
  var lcv25 = parseInt(localStorage.getItem('lcv25')) / 100;//25个月继续率
  var zjrl = parseInt(localStorage.getItem('zjrl'));//组均人力

  // 计算直辖组人力
  // 1.晋升AS人数
  var temp1 = zxzrs + zjzy*lcv13*10;  // 目前直辖组人力+直接增员人数*13个月留存率*10年
  // 未来育成AS人数
  var as = Math.round(temp1/5);
  // 未来育成SS人数
  var ss = Math.round((as + zxas)/3);
  // 未来育成UM人数
  var um = Math.round((ss + zxss)/3);
  // 未来育成UM人数
  var ad = Math.round((um + zxum)/3);
  // 直辖组人力
  var m_zxzrs = Math.round((temp1 - as)*lcv25);
  // AS人数 = 现有AS人数 + 未来育成AS人数 - 晋升SS人数 - 脱落AS人数（脱落AS默认为30%）
  var m_as = Math.round((zxas + as - ss)*7/10);
  var as_as = Math.round(m_as/3);
  // SS人数 = 现有SS人数 + 未来育成SS人数 - 晋升UM人数
  var m_ss = Math.round((zxss + ss - um)*9/10);
  var ss_as = Math.round(m_ss*2);
  // UM人数 = 现有UM人数 + 未来育成UM人数
  var m_um = zxum + um;
  var hj1 = m_zxzrs + zjrl*m_as + zjrl*as_as + zjrl*m_ss + zjrl*ss_as;
  var hj2 = m_um*15 + zjrl*9*m_um;


  localStorage.setItem('m_zxzrs', m_zxzrs);// 直辖组人力

  localStorage.setItem('m_as', m_as);// AS 直辖组组数
  localStorage.setItem('zjrl-mult-m_as', zjrl*m_as);// AS 直辖组人力
  localStorage.setItem('as_as', as_as);// AS 育成组组数
  localStorage.setItem('zjrl-mult-as_as', zjrl*as_as);// AS 育成组人力

  localStorage.setItem('m_ss', m_ss);// SS 直辖组组数
  localStorage.setItem('zjrl-mult-m_ss', zjrl*m_ss);// SS 直辖组人力
  localStorage.setItem('ss_as', ss_as);// SS 育成组组数
  localStorage.setItem('zjrl-mult-ss_as', zjrl*ss_as);// SS 育成组人力

  localStorage.setItem('hj1', hj1);// 直辖部未来人力

  // 计算育成部人力
  localStorage.setItem('m_um', m_um);// 部数
  localStorage.setItem('m_um-mult-15', m_um*15);// 直辖组人力
  localStorage.getItem('um_um', zjrl*9*m_um);// 育成组人力
  localStorage.setItem('hj2', hj2);// 育成部未来人力

  var rank = "";
  if (m_um >= 2) {
    rank = "AD";
  } else if (m_as+m_ss+as_as+ss_as >= 5) {
    rank = "UM";
  } else {
    rank = "";
  }
  localStorage.setItem('rank', rank);// 职级
  localStorage.setItem('hj', hj1 + hj2);// 团队总人数

  // 数据填充
  $('#rank').html(localStorage.getItem('rank'));
  $('#total').html(localStorage.getItem('total'));
  $('#hj1').html(localStorage.getItem('hj1'));
  $('#m_um').html(localStorage.getItem('m_um'));
  $('#hj2').html(localStorage.getItem('hj2'));


  $zxbData = $('#zxb table span');
  for (key in localStorage) {
    $zxbData.filter('[data-' + key + ']').html(localStorage[key]);
  }
  $ycbData = $('#ycb table span');
  for (key in localStorage) {
    $ycbData.filter('[data-' + key + ']').html(localStorage[key]);
  }

});
