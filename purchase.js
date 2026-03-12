
$(document).ready(function() {

    // update harga otomatis berdasarkan item
    $("#pItem").change(function(){
        let price = $("#pItem option:selected").data("price");
        $("#pPrice").val("Rp " + price.toLocaleString());
        
        let qty = $("#pQty").val();
        $("#pTotal").val("Rp " + (price * qty).toLocaleString());
    }).trigger("change");


    // update total saat quantity berubah
    $("#pQty").on("input", function(){
        let price = $("#pItem option:selected").data("price");
        let qty = $(this).val();
        
        $("#pTotal").val("Rp " + (price * qty).toLocaleString());
    });

    // 🔥 animasi BUY + tampilkan invoice pop-up
    $("#purchaseForm").submit(function(e){
        e.preventDefault();

        let btn = $("#buyBtn");

        // animasi loading
        btn.text("Processing...");
        btn.css("background", "#977349");

        setTimeout(function(){

            // masukkin data ke invoice
            $("#invName").text($("#pName").val());
            $("#invItem").text($("#pItem option:selected").text());
            $("#invPrice").text($("#pPrice").val());
            $("#invQty").text($("#pQty").val());
            $("#invTotal").text($("#pTotal").val());

            // tampilkan popup
            $("#invoicePopup").fadeIn(200);

            btn.text("Buy");
            btn.css("background", "#b98d58");

        }, 800);
    });
});

function closeInvoice(){
    $("#invoicePopup").fadeOut(200);
}

