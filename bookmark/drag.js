function allowDrop(ev) {
	ev.preventDefault();
}
function drop(ev) {
	ev.preventDefault();
	//alert(ev); 触发相同事件
	// alert(ev.dataTransfer); 相同
	/*alert(ev.dataTransfer.types);
	var data=ev.dataTransfer.getData("text/plain"); // 可以获取data！ Url 不可Title
	alert(data);
	alert(ev.dataTransfer.getData("text/uri-list"));
	alert(ev.dataTransfer.getData("text/x-opera-description")); // 收藏的名称
	*/
	
	var link = document.createElement("a");
	link.setAttribute('href',ev.dataTransfer.getData("text"));
	link.setAttribute('target','_blank');
	link.setAttribute('class','button green');
	link.setAttribute('draggable','true'); //ondragstart="drag(event)
	// link.href = 
	// link.draggable=
	link.setAttribute('ondblclick','javascript:alert("hi");return false'); //ondragstart="drag(event) // 为了不触发打开链接需要return false
    link.innerHTML = ev.dataTransfer.getData("text/x-opera-description");
	ev.target.appendChild(link);
// 书签可以直接在浏览器之间拖动
// TODO 磁贴方式可拖动
}