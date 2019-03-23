<template>
    <div>
      <input type="file" accept="image/*" @change="getImg($event)">
    </div>
</template>

<script>
  //上传图片到oss
  export default {
        name: "test",
      data(){
          return {
            objdata:null,
          }
      },
      methods:{
          getImg:function (e) {
            var self=this;
            var file =e.target.files[0];
            let fdata=new FormData();
            this.axios.get("api/v2/ossGetAccept")
            // this.axios.get("/api/v2/ossGetAccept")
              .then((data)=>{
                fdata.append("name",file.name);
                fdata.append("key",data.data.data.dir+"${filename}");
                fdata.append("policy",data.data.data.policy);
                fdata.append("OSSAccessKeyId",data.data.data.accessid);
                fdata.append("success_action_status","200");
                fdata.append("signature",data.data.data.signature);
                fdata.append("file",file);
                console.log(fdata.get("success_action_status"));
                console.log(fdata.get("OSSAccessKeyId"));
                console.log(fdata.get("policy"));
                console.log(fdata.get("signature"));
                console.log(fdata.get("key"));
                console.log(fdata.get("name"));
                console.log(fdata.get("file"));
                var xhr=new XMLHttpRequest();
                xhr.open("post",data.data.data.host);
                // xhr.setRequestHeader("Content-Type","multipart/form-data");
                xhr.onreadystatechange=function(){
                  if (xhr.readyState == 4 && xhr.status == 200){
                    self.$vux.alert.show({
                      title:"提示",
                      content:"上传成功！",
                    })
                  }
                };
                xhr.send(fdata);
                // this.axios({
                //   url:data.data.data.host,
                //   method:"post",
                //   headers:{'Content-Type':'multipart/form-data'},
                //   data:
                //   fdata,
                //   // {
                //   //   accessKeyId:data.data.data.accessid,//需要根据自己的bucket填写 详情请见oss api
                //   //   policy: data.data.data.policy,//policyBase64规定了请求的表单域的合法性
                //   //   signature: data.data.data.signature, //根据Access Key Secret和policy计算的签名信息，OSS验证该签名信息从而验证该Post请求的合法性
                //   //   success_action_status:'200', // 让服务端返回200,不然，默认会返回204
                //   //   key: data.data.data.dir+file.filename, //文件名字，可设置路径
                //   //   file:file
                //   //  }
                // }).then((data)=>{
                //   console.log(data)
                // })
              })
          }
      }
    }
</script>

<style scoped>

</style>
