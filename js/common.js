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

