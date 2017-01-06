# 车商城个人中心部分数据接口文档

## 目录
#### &sect; [概述](#overview)

#### &sect; [类别](#category)
* [我的订单](#order)
* [订单详情](#detail)
* [完成验车](#close)
* [我的收藏](#favorites)
* [取消收藏](#removeFavorites)
* [我的消息](#messages)
* [清空消息](#clearMessages)
* [删除消息](#removeMessages)

****

## <a name="overview"> &sect; 概述</a>
因为客户端特殊的使用场景，和Webview性能方面的短板，为了能给用户带来更快，更友好的操作界面和体验，本次车商城个人中心部分的页面决定采用weex来做基础架构，因此需要后端工程师同学们提供以下数据接口来驱动页面的展示。

Weex是有阿里移动发起的开源项目，现已捐献给Apache基金会来孵化，拥有非常强劲的性能，非常完全而且简介的变成接口，它能够在App端将H5页面直接编译为App Native界面来展示，在Browser端依然能够保证网页的输出，采用这个将极大的解决多端不统一的窘境。

****
## <a name="category"> &sect; 类别</a>

### <a name="order"> &gt; 我的订单</a>

#### 请求说明
接口地址："orderList.php";
调用方式：GET;

#### 参数说明

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
uid | string | 1 | 当前用户id
page | number | 1 | 页码索引

#### 请求实例
    https://mall.360che.com/orderList.php?uid=10002000&page=1

#### 返回结果

```
    {
        status:1,
        latest:1,
        data:[
            {
                "id":20161205698302930489,
                "date":"2016-12-05 14:36",
                "payStatus":0,
                "payUrl":"pay.php?id=ora023232332233223",
                "productInfo":{
                    "imguri":"https://s.kcimg.cn/mall/img_1.jpg",
                    "name":"一汽解放 j6p 牵引车",
                    "color":"红色",
                    "price":"11.89万"
                }
            },
            {
                "id":20161205698302930489,
                "date":"2016-12-05 14:36",
                "payStatus":1,
                "productInfo":{
                    "imguri":"https://s.kcimg.cn/mall/img_1.jpg",
                    "name":"一汽解放 j6p 牵引车",
                    "color":"红色",
                    "price":"11.89万"
                }
            },
            .....
        ]
    }
```
### <a name="detail"> &gt; 订单详情</a>

#### 请求说明
接口地址："orderDetail.php";
调用方式：GET;

#### 参数说明

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
id | string | 1 | 订单id
uid | string | 1 | 当前用户id

#### 请求实例
```
    https://mall.360che.com/orderDetail.php?id=20161205698302930489uid=10002000
```

#### 返回结果

```
        {
            status:1,
            data:{
                "id":20161205698302930489,
                "date":"2016-12-05 14:36",
                "payStatus":1,
                "refundUrl":"https://mall.360che.com",
                "productInfo":{
                    "imguri":"https://s.kcimg.cn/mall/img_1.jpg",
                    "name":"一汽解放 j6p 牵引车",
                    "color":"红色",
                    "price":"11.89万"
                },
                payInfo:{
                    "initial":"899元（需交款）",
                    "channel":"支付宝",
                    "date":"2016-12-05 14:36",
                    "balance":"118,372元（119,132元-899元定金）"
                },
                pickid:"689307633838",
                purchaseInfo:{
                    "name":"刘强",
                    "phone":"15801058006"
                },
                dealerInfo:{
                    "name":"北京和田汽车销售有限公司",
                    "address":"北京市通州区杨庄路北京和田汽车销售有限公司",
                    "expiry":"2016-12-13 14：59",
                    "manager":"刘强",
                    "phone":"13864835649"
                }
            }
        }
```

****

### <a name="close"> &gt; 完成验车</a>

#### 请求说明
接口地址："orderClose.php";
调用方式：GET|POST;

#### 参数说明

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
id | string | 1 | 订单id
uid | string | 1 | 当前用户id
pid | string | 1 | 提车单号

#### 请求实例（示例全部以GET请求的形态呈现）
```
    https://mall.360che.com/orderDetail.php?id=20161205698302930489uid=10002000&pid=689307633838
```
#### 返回结果

```
    {
        "status":0,
        "errInfo":"完成验车失败"
    }
```

****

### <a name="favorites"> &gt; 我的收藏</a>

#### 请求说明
接口地址："favorites.php";
调用方式：GET;

#### 参数说明

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
operate | string | 1 | getList
uid | string | 1 | 当前用户id
page| number | 1 | 页码索引

#### 请求实例（示例全部以GET请求的形态呈现）
```
    https://mall.360che.com/favorites.php?operate=getList&uid=10002000&page=1
```
#### 返回结果

```
    {
        "status":0,
        "latest":1,
        "data":[
            {
                "id":"10000111",
                "imguri":"https://s.kcimg.cn/mall/img_1.jpg",
                "name":"一汽解放 j6p 牵引车",
                "desc":"经典车型 安全可靠 赚钱利器 最适经典车型 安全可靠 赚钱利器 最适",
                "price":"11.50万元"
            },
            ...
        ]
    }
```
****

### <a name="removeFavorites"> &gt; 取消收藏</a>
#### 请求说明
接口地址："favorites.php";
调用方式：GET;

#### 参数说明

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
operate | string | 1 | remove
uid | string | 1 | 当前用户id
fid | number | 1 | 收藏id

#### 请求实例（示例全部以GET请求的形态呈现）
```
    https://mall.360che.com/favorites.php?operate=remove&uid=10002000&fid=10000111
```
#### 返回结果

```
    {
        "status":1,
        "errInfo":"删除成功",
    }
```


****

### <a name="messages"> &gt; 我的消息</a>

#### 请求说明
接口地址："messages.php";
调用方式：GET;

#### 参数说明

参数名称 | 参数类型 | 是否必选 | 备注
---|---|---|---
operate | string | 1 | getList
uid | string | 1 | 当前用户id
page | number | 1 | 页码索引

#### 请求实例

```
    https://mall.360che.com/messages.php?operate=getList&uid=10002000&page=1
```
#### 返回结果

```
    {
        "status":1,
        "data":[
            {
                "id":1000001,
                "avatar":"https://s.kcimg.cn/ff.jpg",
                "content":"亲爱的用户，2017年1月23日卡车之家-卡车商城正式上线期望您的关注，谢谢！~",
                "date":"2016.12.08 12:562016.12.08 12:56"
            },
        ],
    }
```

****

### <a name="clearMessages"> &gt; 清空消息</a>

****

### <a name="removeMessages"> &gt; 删除单条消息</a>

****
