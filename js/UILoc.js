(function (PIXI, g, c, window) {
    'use strict';
    c.UILoc = function (j) {
        c.MenuText.call(this, j, []);
        this.visible = false;
        this.position.set(0, 0);
    };
    c.UILoc.prototype = Object.create(c.MenuText.prototype);
    c.UILoc.prototype.constructor = c.UILoc;
    c.UILoc.prototype.getResult = function(i) {
        var i = this.menu_items.indexOf(this.selected);
        this.visible = false;
        this.j.gevent.darkScene();
        this.j.gevent.setManLoc(this.data[i].x, this.data[i].y);
        this.j.gevent.lightScene();


        return;
    };
    c.UILoc.prototype.onPressedCancel = function(e) {
        this.visible = false;
    };
    c.UILoc.prototype.init = function() {
        this.data = [
            {'name' : '冰火島-冰火岛(102,31)', 'x' : 102, 'y' : 31},
            {'name' : '渤泥島-渤泥岛(274,34)', 'x' : 274, 'y' : 34},
            {'name' : '靈蛇島-灵蛇岛(202,58)', 'x' : 202, 'y' : 58},
            {'name' : '霹靂堂-霹雳堂(411,209)', 'x' : 411, 'y' : 209},
            {'name' : '桃花島-桃花岛(341,138)', 'x' : 341, 'y' : 138},
            {'name' : '無名島-无名岛(422,29)', 'x' : 422, 'y' : 29},
            {'name' : '萬鱷島-万鳄岛(429,136)', 'x' : 429, 'y' : 136},
            {'name' : '神龍教[島]-神龙教(130,100)', 'x' : 130, 'y' : 100},
            {'name' : '俠客島-侠客岛(435,319)', 'x' : 435, 'y' : 319},
            {'name' : '白駝山-白驼山(141,433)', 'x' : 141, 'y' : 433},
            {'name' : '北丑居(51,109)', 'x' : 51, 'y' : 109},
            {'name' : '冰火島-冰火岛(102,31)', 'x' : 102, 'y' : 31},
            {'name' : '渤泥島-渤泥岛(274,34)', 'x' : 274, 'y' : 34},
            {'name' : '成昆居(19,249)', 'x' : 19, 'y' : 249},
            {'name' : '程瑛居-程锳居(295,422)', 'x' : 295, 'y' : 422},
            {'name' : '重陽宮-重阳宫(145,217)', 'x' : 145, 'y' : 217},
            {'name' : '大輪寺-大轮寺(114,297)', 'x' : 114, 'y' : 297},
            {'name' : '峨嵋派(215,408)', 'x' : 215, 'y' : 408},
            {'name' : '福威鏢局-福威镖局(369,258)', 'x' : 369, 'y' : 258},
            {'name' : '丐幫-丐帮(229,256)', 'x' : 229, 'y' : 256},
            {'name' : '高升客棧-高升客栈(198,401)', 'x' : 198, 'y' : 401},
            {'name' : '古墓(144,218)', 'x' : 144, 'y' : 218},
            {'name' : '光明頂-光明顶(68,397)', 'x' : 68, 'y' : 397},
            {'name' : '海邊小屋-海边小屋(286,157)', 'x' : 286, 'y' : 157},
            {'name' : '河洛客棧-河洛客栈(359,229)', 'x' : 359, 'y' : 229},
            {'name' : '黑龍潭-黑龙潭(309,351)', 'x' : 309, 'y' : 351},
            {'name' : '黑木崖(118,178)', 'x' : 118, 'y' : 178},
            {'name' : '衡山派(355,376)', 'x' : 435, 'y' : 319},
            {'name' : '華山派-华山派(193,302)', 'x' : 435, 'y' : 319},
            {'name' : '恆山派(112,215)', 'x' : 112, 'y' : 215},
            {'name' : '洪七公居(169,210)', 'x' : 169, 'y' : 210},
            {'name' : '胡斐居(86,94)', 'x' : 86, 'y' : 94},
            {'name' : '蝴蝶谷(238,219)', 'x' : 238, 'y' : 219},
            {'name' : '華山派-华山派(193,302)', 'x' : 193, 'y' : 302},
            {'name' : '回族部落(120,343)', 'x' : 120, 'y' : 343},
            {'name' : '金輪寺-金轮寺(103,397)', 'x' : 103, 'y' : 397},
            {'name' : '絕情谷-绝情谷(133,270)', 'x' : 133, 'y' : 270},
            {'name' : '崆峒派-(160,314)', 'x' : 160, 'y' : 314},
            {'name' : '崑崙山-昆仑山(42,420)', 'x' : 42, 'y' : 420},
            {'name' : '崑崙仙境-昆仑仙境(22,440)', 'x' : 22, 'y' : 440},
            {'name' : '擂鼓山(176,221)', 'x' : 176, 'y' : 221},
            {'name' : '凌霄城(166,404)', 'x' : 166, 'y' : 404},
            {'name' : '靈蛇島-灵蛇岛(202,58)', 'x' : 202, 'y' : 58},
            {'name' : '梅莊-梅庄(332,197)', 'x' : 332, 'y' : 197},
            {'name' : '苗人鳳居-苗人凤居(223,187)', 'x' : 223, 'y' : 187},
            {'name' : '明教分舵(76,363)', 'x' : 76, 'y' : 363},
            {'name' : '摩天崖(186,338)', 'x' : 186, 'y' : 338},
            {'name' : '南賢居-南贤居(388,325)', 'x' : 388, 'y' : 325},
            {'name' : '霹靂堂-霹雳堂(411,209)', 'x' : 411, 'y' : 209},
            {'name' : '平一指(215,196)', 'x' : 215, 'y' : 196},
            {'name' : '破廟-破庙(19,181)', 'x' : 19, 'y' : 181},
            {'name' : '青城派(185,370)', 'x' : 185, 'y' : 370},
            {'name' : '沙漠廢墟-沙漠废墟(53,219)', 'x' : 53, 'y' : 219},
            {'name' : '少林派(247,300)', 'x' : 247, 'y' : 300},
            {'name' : '神龍教-神龙教(130,100)', 'x' : 130, 'y' : 100},
            {'name' : '思過崖-思过崖(187,301)', 'x' : 187, 'y' : 301},
            {'name' : '嵩山派(242,293)', 'x' : 242, 'y' : 293},
            {'name' : '泰山派(193,139)', 'x' : 193, 'y' : 139},
            {'name' : '桃花島-桃花岛(341,138)', 'x' : 341, 'y' : 138},
            {'name' : '天寧寺-天宁寺(330,237)', 'x' : 330, 'y' : 237},
            {'name' : '田伯光居(385,307)', 'x' : 385, 'y' : 307},
            {'name' : '鐵掌山-铁掌山(302,343)', 'x' : 302, 'y' : 343},
            {'name' : '萬鱷島-万鳄岛(429,136)', 'x' : 429, 'y' : 136},
            {'name' : '無量山-无量山(168,426)', 'x' : 168, 'y' : 426},
            {'name' : '無名島-无名岛(422,29)', 'x' : 422, 'y' : 29},
            {'name' : '武當派-武当派(226,340)', 'x' : 226, 'y' : 340},
            {'name' : '五毒教(247,424)', 'x' : 247, 'y' : 424},
            {'name' : '俠客島-侠客岛(435,319)', 'x' : 435, 'y' : 319},
            {'name' : '星宿海(132,410)', 'x' : 132, 'y' : 410},
            {'name' : '薛慕華居-薛慕华居(192,261)', 'x' : 192, 'y' : 261},
            {'name' : '閻基居-阎基居(396,374)', 'x' : 396, 'y' : 374},
            {'name' : '燕子塢-燕子坞(300,193)', 'x' : 300, 'y' : 193},
            {'name' : '楊過山洞-杨过山洞(68,170)', 'x' : 68, 'y' : 170},
            {'name' : '藥王莊-药王庄(323,218)', 'x' : 323, 'y' : 218},
            {'name' : '一燈居-一灯居(314,370)', 'x' : 314, 'y' : 370},
            {'name' : '有間客棧-有间客栈(78,141)', 'x' : 78, 'y' : 141},
            {'name' : '悅來客棧(221,286)', 'x' : 221, 'y' : 286},
            {'name' : '雲鶴崖-云鹤崖(17,15)', 'x' : 17, 'y' : 15},
            {'name' : '自宅(352,233)', 'x' : 352, 'y' : 233},
        ];
        var str = [];
        for (var i in this.data) {
            str.push(this.data[i].name);
        }
        this.setStrings(str);
        this.setFontSize(16);
    };


})(PIXI, g, c, window);
