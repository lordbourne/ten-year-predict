// 定义了一些公共的函数

function gotoNextPage(obj) {
  // 如果是 jq 对象，需要转化为 dom 对象, jq 对象可以根据是否有 jquery 属性判断
  var domObj = (!obj.jquery) ? obj : obj[0];
  if (domObj.tagName == "A") {
    location.href = domObj.href;
  } else {
    location.href = domObj.dataset.href;
  }
}
// 正则替换
function fillData(obj, data, pattern) {
  if (arguments.length == 2) {
    var pattern = /\{\{([^{}]+)\}\}/g;// 默认的正则模式
  }
  if (typeof obj != "string") {
    var domObj = (!obj.jquery) ? obj : obj[0]; // 转化为 dom 对象
    var str = domObj.innerHTML;
    var newstr = str.replace(pattern, function() {
      return data[arguments[1]];
    });
    console.log(newstr); // todo: 测试用，别忘删了
    domObj.innerHTML = newstr;
  } else {// 传入纯字符串的模板时
    return newstr = obj.replace(/\{\{([^{}]+)\}\}/g, function() {
      return data[arguments[1]];
    });
  }

}
