$(document).ready(function() {
// 获取数据
  var rjjs = parseInt(localStorage.rjjs);// 月实动人均件数
  var jjbf = parseInt(localStorage.jjbf);// 件均保费
  var yjl = parseInt(localStorage.yjl);// 佣金率
  var kdl = parseInt(localStorage.kdl);// 开单率
  var sy = parseInt(localStorage.sy);// 个人首佣

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

  // 直辖部人力
  var m_zxzrs = parseInt(localStorage.getItem('m_zxzrs'));// 直辖组人力
  var m_as = parseInt(localStorage.getItem('m_as'));// AS 直辖组组数
  // var zjrl-mult-m_as = parseInt(localStorage.getItem('zjrl-mult-m_as'));// AS 直辖组人力
  var as_as = parseInt(localStorage.getItem('as_as'));// AS 育成组组数
  // var zjrl-mult-as_as = parseInt(localStorage.getItem('zjrl-mult-as_as'));// AS 育成组人力
  var m_ss = parseInt(localStorage.getItem('m_ss'));// SS 直辖组组数
  // var zjrl-mult-m_ss = parseInt(localStorage.getItem('zjrl-mult-m_ss'));// SS 直辖组人力
  var ss_as = parseInt(localStorage.getItem('ss_as'));// SS 育成组组数
  // var zjrl-mult-ss_as = parseInt(localStorage.getItem('zjrl-mult-ss_as'));// SS 育成组人力
  var hj1 = parseInt(localStorage.getItem('hj1'));// 直辖部未来人力

  // 育成部人力
  var m_um = parseInt(localStorage.getItem('m_um'));// 部数
  // var m_um-mult-15 = parseInt(localStorage.getItem('m_um-mult-15'));// 直辖组人力
  var um_um = parseInt(localStorage.getItem('um_um'));// 育成组人力
  var hj2 = parseInt(localStorage.getItem('hj2'));// 育成部未来人力

  // 所有人力
  var hj = parseInt(localStorage.getItem('hj'));

// 计算
  //实动人均FYC=人均件数 X件均保费 X 佣金率
  var rjfyc=rjjs*jjbf*yjl/100;
  var hj_fyc = Math.round(m_zxzrs*kdl/100*rjfyc/10000*100)/100.0;
  var m_as_fyc = Math.round(m_as*kdl/100*rjfyc/10000*100)/100.0;
  var as_as_fyc = Math.round(as_as*kdl/100*rjfyc/10000*100)/100.0;
  var m_ss_fyc = Math.round(m_ss*kdl/100*rjfyc/10000*100)/100.0;

  // FYC 数据的计算

  var fyc = [];

  for (key in data) {
    fyc[key] = getFyc();
  }
  function getFyc(x, kdl, rjfyc) {
    return Math.round(x*kdl/100*rjfyc/10000*100)/100.0;
  }



// 填充数据
  $('#hj').html(localStorage.hj);
  $('#hj_fyc').html(localStorage.hj_fyc);

  $('#hj1').html(localStorage.hj1);
  $('#hj1_fyc').html(localStorage.hj1_fyc);
  $('#hj2').html(localStorage.hj2);
  $('#hj2_fyc').html(localStorage.hj2_fyc);
  $zxbData = $('#zxb table span');
  for (key in localStorage) {
    $zxbData.filter('[data-' + key + ']').html(localStorage[key]);
  }
});
