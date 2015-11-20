$('#file').change(function () {
    var Qiniu_UploadUrl = "http://up.qiniu.com";
    var Qiniu_upload = function (f, token, key) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', Qiniu_UploadUrl, true);
        var formData;
        formData = new FormData();
        formData.append('token', token);
        formData.append('file', f);
        formData.append('key', key);
        xhr.send(formData);
    };
    if ($("#file")[0].files.length > 0 && token != "") {
        time = getNowDate()
        filetype = $("#file")[0].files[0].name
        file_type = /\.[^\.]+$/.exec(filetype);
        filename = time + file_type
        Qiniu_upload($("#file")[0].files[0], token, filename);
        path = 'http://7sbxd0.com1.z0.glb.clouddn.com/' + filename
        $("#rs").show()
        $("#rs-text").val(path);
    } else {
        alert("请选择图片！");
    }
})

$("#rs-close").click(function(){
    $("#rs").hide()
});