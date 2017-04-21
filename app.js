const pro = require('./province');

const citylist = pro.citylist,
	  listlen = citylist.length;

const province = $('#province'),
 	  province_sel = $('#province-sel'),
 	  city = $('#city'),
 	  city_sel = $('#city-sel'),
 	  district = $('#district'),
 	  district_sel = $('#district-sel');

// 遍历省份，输出
for(let i = 0; i < listlen; i++){
	let el = document.createElement('option');
	let province_text = document.createTextNode(citylist[i].p);
	el.append(province_text);
	province_sel.append(el);
}
// 选择省份时。。。
province_sel.length = 2;

province_sel.change(function(e){
	// 输出选择的省份名称
	let province_index = e.target.selectedIndex;
	province.html(e.target.options[province_index].text);
	// 重置城市、区县名称
	if(city_sel.has()){
		$('#city-sel option').remove();
		city.html('市');
		district.html('区');
	}
	// 遍历城市，输出
	let citylen = citylist[province_index].c.length;
	for(let i = 0; i < citylen; i++){
		let el = document.createElement('option');
		let text = document.createTextNode(citylist[province_index].c[i].n);
		el.append(text);
		city_sel.append(el);
	}
	// 选择城市时。。。
	city_sel.change(function(e){
		// 输出选择的城市名称
		let city_index = e.target.selectedIndex;
		city.html(e.target.options[city_index].text);
		// 重置区县名称
		if(district_sel.has()){
			$('#district-sel option').remove();
			district.html('区');
		}
		// 遍历区县，输出
		if(citylist[province_index].c[city_index].a){
			let districtlen = citylist[province_index].c[city_index].a.length;
			for(let i = 0; i < districtlen; i++){
				let el = document.createElement('option');
				let text = document.createTextNode(citylist[province_index].c[city_index].a[i].s);
				el.append(text);
				district_sel.append(el);
			}
			// 选择区县时。。。
			district_sel.change(function(e){
				// 输出选择的区县名称
				let district_index = e.target.selectedIndex;
				district.html(e.target.options[district_index].text);
			})
		}
	})
})


