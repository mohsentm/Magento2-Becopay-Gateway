/*browser:true*/
/*global define*/
define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'becopay_gateway',
                component: 'Becopay_BecopayPaymentGateway/js/view/payment/method-renderer/becopay_gateway'
            }
        );
        /** Add view logic here if needed */
        return Component.extend({});
    }
);
