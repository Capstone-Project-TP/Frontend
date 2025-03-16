function fileChange() {
	var fileTarget = $('.filebox .upload_hidden');
	fileTarget.on('change', function () { // 값이 변경되면
		if (window.FileReader) { // modern browser
			var filename = $(this)[0].files[0].name;
		} else { // old IE
			var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출
		}
		// 추출한 파일명 삽입
		$(this).siblings('.upload_name').val(filename);
	});
};

function show(id) {
	$('#' + id).modal({
		fadeDuration: 100,
		fadeDelay: 0.1,
	});
}

function showId(id) {
	$('#' + id).addClass('on');
}

$(document).ready(function () {
	// filebox
	fileChange();

	$(".bbs table td").has("input, a, button").css("padding", "5px 10px");

});