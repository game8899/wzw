document.writeln("<style>");
document.writeln("#tabwangzw { color: #000;}");
document.writeln("#tabwangzw .tuzhiwangzwbox { display: block; text-align: center; font-weight: bold; font-size: 18px;}");
document.writeln("#tabwangzw .tuzhiwangzwbox ul { padding: 2px; height: 80px; background: #fff}");
document.writeln("#tabwangzw .tuzhiwangzwbox li { float: left; width: 33.333%; height: 40px; line-height: 36px; border: solid 2px #fff; box-sizing: border-box; cursor: pointer; background: #eee; border-radius: 8px;}");
document.writeln("#tabwangzw .tuzhiwangzwbox li.hover { color: #fff; background: #0a5cda;}");
document.writeln("#tabwangzw .tuzhiwangzwbox li.hover font { color: #fff!important;}");
document.writeln("#tabwangzw .Contentbox {}");
document.writeln("#tabwangzw .Contentbox img { width: 100%; height: auto;}");
document.writeln("");document.writeln("</style>");

document.writeln(" <table border=\'1\' width=\'100%\' cellpadding=\'0\' cellspacing=\'0\' bgcolor=\'#FFFFFF\' bordercolor=\'#D4D4D4\' style=\'border-collapse: collapse\'>");
document.writeln("	<tr>");
document.writeln("");
document.writeln("		<td class=\'center f13 black l150\' height=\'29\' align=\'center\' bgcolor=\'#FF0000\'>");
document.writeln("");
document.writeln("				<b>");
document.writeln("				<font size=\'4\'><font color=\'#FFFF00\' face=\'微软雅黑\'>&nbsp;</font><font face=\'微软雅黑\'><font color=\'#FFFF00\'></font><font color=\'#FFFFFF\'>王中王封神榜</font></font></font></b></td>");
document.writeln("</tr>");
document.writeln("			</table>");


document.writeln("<div id=\'tabwangzw\'>");
document.writeln("<div class=\'tuzhiwangzwbox\'>");
document.writeln("    <ul>");
document.writeln("       <li id=\'tabwangzw1\' onClick=\'setTab(\"tabwangzw\",1,6)\' class=\'hover\'>八肖图</li>");
document.writeln("       <li id=\'tabwangzw2\' onClick=\'setTab(\"tabwangzw\",2,6)\'>尾数图</li>");
document.writeln("       <li id=\'tabwangzw3\' onClick=\'setTab(\"tabwangzw\",3,6)\'>单双图</li>");
document.writeln("       <li id=\'tabwangzw4\' onClick=\'setTab(\"tabwangzw\",4,6)\'>六肖图</li>");
document.writeln("       <li id=\'tabwangzw5\' onClick=\'setTab(\"tabwangzw\",5,6)\'>波数图</li>");
document.writeln("       <li id=\'tabwangzw6\' onClick=\'setTab(\"tabwangzw\",6,6)\'>平特图</li>");
document.writeln("	</ul>");
document.writeln("</div>");
document.writeln("<div class=\'Contentbox\'> ");
document.writeln("	<div id=\'con_tabwangzw_1\'><img src=\'/wzwtu/wzw01.jpg\'></div>");
document.writeln("	<div id=\'con_tabwangzw_2\' style=\'display:none\'><img src=\'/wzwtu/wzw02.jpg\'></div>");
document.writeln("	<div id=\'con_tabwangzw_3\' style=\'display:none\'><img src=\'/wzwtu/wzw03.jpg\'></div>");
document.writeln("	<div id=\'con_tabwangzw_4\' style=\'display:none\'><img src=\'/wzwtu/wzw04.jpg\'></div>");
document.writeln("	<div id=\'con_tabwangzw_5\' style=\'display:none\'><img src=\'/wzwtu/wzw05.jpg\'></div>");
document.writeln("	<div id=\'con_tabwangzw_6\' style=\'display:none\'><img src=\'/wzwtu/wzw06.jpg\'></div>");
document.writeln("</div>");
document.writeln("</div>");
function setTab(name,cursel,n){
	for(i=1;i<=n;i++){
	var menu=document.getElementById(name+i);
	var con=document.getElementById('con_'+name+'_'+i);
	menu.className=i==cursel?'hover':'';
	con.style.display=i==cursel?'block':'none';
	}
}
