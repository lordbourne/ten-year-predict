$(document).ready(function() {
  // var zxzrs = parseInt(localStorage.getItem('zxzrs'));// 直辖组现有人力
  // var zxbrs = parseInt(localStorage.getItem('zxbrs'));// 直辖部现有人力
  // var sxrs = parseInt(localStorage.getItem('sxrs'));// 所辖人力
  // var zxas = parseInt(localStorage.getItem('zxas'));// 直辖 AS
  // var zxss = parseInt(localStorage.getItem('zxss'));// 直辖 SS
  // var zxum = parseInt(localStorage.getItem('zxum'));// 直辖 UM
  // var zxad = parseInt(localStorage.getItem('zxas'));// 直辖 AD(同级育成 AD)

  // var zjzy = parseInt(localStorage.getItem('zjzy'));// 每年个人直接增员
  // var lcv13 = parseInt(localStorage.getItem('lcv13')) / 100;//13个月继续率
  // var lcv25 = parseInt(localStorage.getItem('lcv25')) / 100;//25个月继续率
  // var zjrl = parseInt(localStorage.getItem('zjrl'));//组均人力

  // // 直辖部人力
  // var m_zxzrs = parseInt(localStorage.getItem('m_zxzrs'));// 直辖组人力
  // var m_as = parseInt(localStorage.getItem('m_as'));// AS 直辖组组数
  // // var zjrl-mult-m_as = parseInt(localStorage.getItem('zjrl-mult-m_as'));// AS 直辖组人力
  // var as_as = parseInt(localStorage.getItem('as_as'));// AS 育成组组数
  // // var zjrl-mult-as_as = parseInt(localStorage.getItem('zjrl-mult-as_as'));// AS 育成组人力
  // var m_ss = parseInt(localStorage.getItem('m_ss'));// SS 直辖组组数
  // // var zjrl-mult-m_ss = parseInt(localStorage.getItem('zjrl-mult-m_ss'));// SS 直辖组人力
  // var ss_as = parseInt(localStorage.getItem('ss_as'));// SS 育成组组数
  // // var zjrl-mult-ss_as = parseInt(localStorage.getItem('zjrl-mult-ss_as'));// SS 育成组人力
  // var hj1 = parseInt(localStorage.getItem('hj1'));// 直辖部未来人力

  // // 育成部人力
  // var m_um = parseInt(localStorage.getItem('m_um'));// 部数
  // // var m_um-mult-15 = parseInt(localStorage.getItem('m_um-mult-15'));// 直辖组人力
  // var um_um = parseInt(localStorage.getItem('um_um'));// 育成组人力
  // var hj2 = parseInt(localStorage.getItem('hj2'));// 育成部未来人力

  // // 所有人力
  // var hj = parseInt(localStorage.getItem('hj'));

  var rjjs = parseInt(localStorage.rjjs);// 月实动人均件数
  var jjbf = parseInt(localStorage.jjbf);// 件均保费
  var yjl = parseInt(localStorage.yjl);// 佣金率
  var kdl = parseInt(localStorage.kdl);// 开单率
  var sy = parseInt(localStorage.sy);// 个人首佣

  //实动人均FYC=人均件数 X件均保费 X 佣金率
  var rjfyc=rjjs*jjbf*yjl/100;

  function getFyc(key, kdl, rjfyc) {
    var t = parseInt(localStorage.getItem(key));
    return Math.round(t*kdl/100*rjfyc/10000*100)/100.0;
  }
  function fillFyc(jqObj, fyc) {
    for (key in fyc) {
      jqObj.filter('[data-' + key + '_fyc]').html(fyc[key]);
    }
  }
  var fycKey = [
                  'm_zxzrs',// 直辖部直辖组人力
                  'm_as',   // 直辖部 AS 直辖组组数
                  'as_as',  // 直辖部 AS 育成组组数
                  'm_ss',   // 直辖部 SS 直辖组组数
                  'ss_as',  // 直辖部 SS 育成组组数
                  'hj1',    // 直辖部总人力
                  'm_um',   // 育成部数量
                  'um_um',  // 育成部育成组人力
                  'hj2',    // 育成部总人力
                  'hj'      // 总人力
                ];
  var fyc = [];
  for (key in fycKey) {
    fyc[fycKey[key]] = getFyc(fycKey[key], kdl, rjfyc);
  }
  // FYC 数据的填充
  $zxbData = $('#zxb table span');
  $ycbData = $('#ycb table span');
  fillFyc($zxbData, fyc);
  fillFyc($ycbData, fyc);
  $('#hj_fyc').html(fyc.hj);
  $('#hj1_fyc').html(fyc.hj1);
  $('#hj2_fyc').html(fyc.hj2);

  // 其他数据
  function fillLocal(jqObj) {
    for (key in localStorage) {
      jqObj.filter('[data-' + key + ']').html(localStorage[key]);
    }
  }
  fillLocal($zxbData);
  fillLocal($ycbData);
  $('#hj').html(localStorage.hj);
  $('#hj1').html(localStorage.hj1);
  $('#hj2').html(localStorage.hj2);

  // 数据存储
  localStorage.setItem('fyc', JSON.stringify(fyc)); // 后面取出用的时候要用 JSON.parse()
});
