function allowDrop(ev) {
	ev.preventDefault();
}
function drop(ev) {
	ev.preventDefault();
	//alert(ev); ������ͬ�¼�
	// alert(ev.dataTransfer); ��ͬ
	/*alert(ev.dataTransfer.types);
	var data=ev.dataTransfer.getData("text/plain"); // ���Ի�ȡdata�� Url ����Title
	alert(data);
	alert(ev.dataTransfer.getData("text/uri-list"));
	alert(ev.dataTransfer.getData("text/x-opera-description")); // �ղص�����
	*/
	
	var link = document.createElement("a");
	link.setAttribute('href',ev.dataTransfer.getData("text"));
	link.setAttribute('target','_blank');
	link.setAttribute('class','button green');
	link.setAttribute('draggable','true'); //ondragstart="drag(event)
	// link.href = 
	// link.draggable=
	link.setAttribute('ondblclick','javascript:alert("hi");return false'); //ondragstart="drag(event) // Ϊ�˲�������������Ҫreturn false
    link.innerHTML = ev.dataTransfer.getData("text/x-opera-description");
	ev.target.appendChild(link);
// ��ǩ����ֱ���������֮���϶�
// TODO ������ʽ���϶�
}