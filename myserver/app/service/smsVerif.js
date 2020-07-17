const Service = require('egg').Service;
const Core = require('@alicloud/pop-core');
class smsVerifService extends Service {
    async smsVerif(obj) {
        console.log(obj, "smsverif77")
        var client = new Core({
            accessKeyId: 'LTAI4G7qTmvEzDSP4kTQXhQp',
            accessKeySecret: 'dfPydm9Du6EEsPNNrZ96tV8maZdctT',
            endpoint: 'https://dysmsapi.aliyuncs.com',
            apiVersion: '2017-05-25'
        });

        const num = Math.floor((Math.random() + 1) * 1000)
        this.ctx.session.smsnum = num
        console.log()
        // console.log(num)
        var params = {
            "RegionId": "cn-hangzhou",
            "PhoneNumbers": `${obj.phone}`,
            "SignName": "mtgyy",
            "TemplateCode": "SMS_196650323",
            "TemplateParam": `{"code":${num}}`

        }

        var requestOption = {
            method: 'POST'
        };

        client.request('SendSms', params, requestOption).then((result) => {
            console.log(JSON.stringify(result));
        }, (ex) => {
            console.log(ex);
        })


    }
}
module.exports = smsVerifService;