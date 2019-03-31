<template>
  <div style="background: #F4F5F6;">
        <div id="HUI_Header" style="height: 47px;">
            <h1>支付</h1>
            <div id="HUI_Back" style="color: #333333;" @click="goback"></div>
        </div>
        <div class="HUI_Wrap" style="width:100%">
            <ul style="background: #CCCCCC;width:100%">
                <li style="padding-top: 1rem;width:100%;background:#ffffff;overflow:hidden;margin-top:.1rem;">
                    <div>
                        <div class="HUI_FL">
                            订单号：<span id="chargeNum">{{charge._id}}</span>
                        </div>
                    </div>
                    <div class="HUI_FL" style="width: 60%;padding:1rem 0;">
                        <div>
                            <div class="HUI_FL" style="width: 48%;text-indent: 2rem;">
                                <img :src="baseUrl+charge.detail.auth_icon" style="width: 60%;" id="pic"/>
                            </div>
                            <div class="HUI_FL" style="width: 48%;padding-top: 0.5rem;">
                                <p id="goodname">{{charge.title}}</p>
                                <p style="font-size: 1rem;color: #9E9E9E;" id="desc">畅听套装 黑金色</p>
                                <p style="font-size: 1rem;color: #9E9E9E;">数量<span id="num">1</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="HUI_FL" style="width: 40%;line-height: 7rem;">
                        <span class="HUI_FR" style="color: #FF0000;margin-right: 1rem;">￥<span class="price" style="color: #FF0000;" id="price">{{charge.detail.price}}</span></span>
                    </div>
                </li>
                <li style="padding-top: 1rem;width:100%;background:#ffffff;overflow:hidden;margin-top:.1rem;">
                    <div class="HUI_FL" style="width: 20%;padding:1rem 0;line-height: 5rem;font-size: 1.2rem;">
                        <span>支付配送</span>
                    </div>
                    <div class="HUI_FL" style="width: 80%;">
                        <div style="padding: 0.8rem 0;height: 5.4rem;">
                            <div class="HUI_FL" style="width: 90%;text-indent: 2rem;font-size: 1.2rem;">
                                <div class="pay" style="height: 2.7rem;line-height: 2.7rem;text-align: right;">
                                    在线支付
                                </div>
                                <div class="send" style="height: 2.7rem;line-height: 2.7rem;text-align: right;">
                                    只工作日送货
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li style="padding-top: 1rem;width:100%;background:#ffffff;overflow:hidden;margin-top:.1rem;">
                    <div class="HUI_FL" style="width: 90%;padding:1rem 0;">
                        <div>
                            <div class="HUI_FL" style="width: 52%;text-indent: 2rem;">
                                <span class="HUI_Icons HUI_Icons_my2line" style="font-size: 1.6rem;line-height: 1.8rem;" id="username">
                                    李豪杰
                                </span>
                            </div>
                            <div class="HUI_FL" style="width: 48%;">
                                <span class="HUI_Icons HUI_Icons_phone" style="font-size: 1.6rem;line-height: 1.8rem;" id="phone">
                                    15820635084
                                </span>
                            </div>
                        </div>
                        <div style="margin-top: 1rem;text-indent: 2rem;">
                            <span class="HUI_Icons HUI_Icons_loaction" style="font-size: 1.6rem;line-height: 1.8rem;" id="address">
                                广东省湛江市
                            </span>
                        </div>
                    </div>
                </li>
                <li style="padding-top: 1rem;width:100%;background:#ffffff;overflow:hidden;margin-top:.1rem;">
                    <div style="padding: 0.5rem 1rem 0.5rem 0;">
                        <div style="display: inline-block;width: 60%;text-align: right;">商品金额：</div>
                        <div style="display: inline-block;text-align: right;width: 38%;color: #ED2D22;" id="good_price">￥{{charge.detail.price}}</div>
                    </div>
                    <div class="product_price" style="padding: 0.5rem 1rem 0.5rem 0;">
                        <div style="display: inline-block;width: 60%;text-align: right;">运费：</div>
                        <div style="display: inline-block;text-align: right;width: 38%;color: #ED2D22;" id="yun">包邮</div>
                    </div>
                    <div class="product_price" style="padding: 0.5rem 1rem 0.5rem 0;">
                        <div style="display: inline-block;width: 60%;text-align: right;">订单金额：</div>
                        <div style="display: inline-block;text-align: right;width: 38%;color: #ED2D22;" id="charge">￥{{charge.detail.price}}</div>
                    </div>
                </li>
            </ul>
        </div>
        
        <div style="position: fixed;height: 4rem;width:100%;background: #EEEEEE;bottom: 0;">
            <div style="width:80%;margin: 0 auto;">
                <div class="submit" style="background: #FF0000;height: 3rem;width: 40%;border-radius:1.5rem ;margin-top: 0.5rem;text-align: center;line-height: 3.2rem;color: #FFFFFF;display: inline-block;" id="pay">
                    支付
                </div>
                <div @click="goback" style="background: #FF0000;height: 3rem;width: 40%;border-radius:1.5rem ;margin-top: 0.5rem;margin-left:18%;text-align: center;line-height: 3.2rem;color: #FFFFFF;display: inline-block;" id="qu">
                    取消订单
                </div>
            </div>
        </div>
</div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    data(){
    return {
      baseUrl
        }
    },
    computed:mapGetters(['charge']),
    methods:{
        goback(){
            this.$router.go(-1)
                    },
    }
}
</script>

<style >








</style>

