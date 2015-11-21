$(document).ready(function(){
    if (localStorage.length > 0) {
        $("#input-access-key").val(localStorage.getItem("access-key"));
        $("#input-secret-key").val(localStorage.getItem("secret-key"));
        $("#input-scope").val(localStorage.getItem("scope"));
        $("#input-deadline").val(localStorage.getItem("deadline"));
        $("#input-url").val(localStorage.getItem("url"));
    };
    $("#save-access-key").click(function(){
        localStorage.setItem("access-key",$("#input-access-key").val());
        location.reload();
    });
    $("#save-secret-key").click(function(){
        localStorage.setItem("secret-key",$("#input-secret-key").val());
        location.reload();
    });
    $("#save-scope").click(function(){
        localStorage.setItem("scope",$("#input-scope").val());
        location.reload();
    });
    $("#save-deadline").click(function(){
        localStorage.setItem("deadline",$("#input-deadline").val());
        location.reload();
    });
    $("#save-url").click(function(){
        localStorage.setItem("url",$("#input-url").val());
        location.href = "pages/tuchuang.html";
    });
});


$('#file').change(function () {
    if( access_key == undefined || secret_key == undefined || scope == undefined || deadline == undefined || url == undefined ){
    alert('上传之前请设置参数！即将跳转至设置页面！或右键点击图标 - 选项进行设置！');
    location.href = "../options.html";
    }
    else {
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
        path = url + filename
        $("#rs").show()
        $("#rs-text").val(path);
    } else {
        alert("请选择图片！");
    }
};
})

$("#rs-text").click(function(){
    this.select();
});

$("#rs-close").click(function(){
    $("#rs").hide();
});
