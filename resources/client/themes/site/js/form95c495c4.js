$(document).ready(function () {
	var ip_img;
	var ip_model;
	var ip_color;
	var ip_memory;
	var ip_oldprice;
	var ip_newprice;

    $('.buy-in-click').click(function () {
		this_form = $(this).closest('form');
		this_block = $(this).closest('section');
		ip_model = (this_block.find('.phone-container-title').text()).trim();
		ip_img = this_block.find('.phone-preview').find('img:visible').attr('src');
		ip_oldprice = (this_form.find('.amount.main_p').text()).trim();
		ip_newprice = (this_form.find('.amount.sale_p').text()).trim();
		ip_color = (this_form.find('.color-div.active').attr('data-param')!=undefined)?(this_form.find('.color-div.active').attr('data-param')).trim():'';
		ip_memory = (this_form.find('.memory-div.active').text()!=undefined)?(this_form.find('.memory-div.active').text()).trim():'';
		$('#ip_model').text(ip_model);
		$('#ip_img').attr('src', ip_img);
		$('#ip_oldprice').text(ip_oldprice);
		$('#ip_newprice').text(ip_newprice);
		$('#ip_color').text(ip_color);
		$('#ip_memory').text(ip_memory);
		$('#buy-in-click-popup').find('.mti_template').remove();
		cloned = this_block.find('.mti_template').clone();
		$('#buy-in-click-popup').find('.mti_text').append(cloned);
    });





});


