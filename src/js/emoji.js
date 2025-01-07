(function(){
	const emojies = [
		{
			title: "Смайлики",
			id: "smiles",
			icons: [
				"&#128512;",
				"&#128515;",
				"&#128516;",
				"&#128513;",
				"&#128518;",
				"&#128517;",
				"&#129315;",
				"&#128514;",
				"&#128578;",
				"&#128579;",
				"&#128521;",
				"&#128522;",
				"&#128519;",
				"&#129392;",
				"&#128525;",
				"&#129321;",
				"&#128536;",
				"&#128535;",
				"&#9786;",
				"&#128538;",
				"&#128537;",
				"&#128523;",
				"&#128539;",
				"&#128540;",
				"&#129322;",
				"&#128541;",
				"&#129297;",
				"&#129303;",
				"&#129325;",
				"&#129323;",
				"&#129300;",
				"&#129296;",
				"&#129320;",
				"&#128528;",
				"&#128529;",
				"&#128566;",
				"&#128527;",
				"&#128530;",
				"&#128580;",
				"&#128556;",
				"&#129317;",
				"&#128524;",
				"&#128532;",
				"&#128554;",
				"&#129316;",
				"&#128564;",
				"&#128567;",
				"&#129298;",
				"&#129301;",
				"&#129314;",
				"&#129326;",
				"&#129319;",
				"&#129397;",
				"&#129398;",
				"&#129396;",
				"&#128565;",
				"&#129327;",
				"&#129312;",
				"&#129395;",
				"&#128526;",
				"&#129299;",
				"&#129488;",
				"&#128533;",
				"&#128543;",
				"&#128577;",
				"&#9785;",
				"&#128558;",
				"&#128559;",
				"&#128562;",
				"&#128563;",
				"&#129402;",
				"&#128550;",
				"&#128551;",
				"&#128552;",
				"&#128560;",
				"&#128549;",
				"&#128546;",
				"&#128557;",
				"&#128561;",
				"&#128534;",
				"&#128547;",
				"&#128542;",
				"&#128531;",
				"&#128553;",
				"&#128555;",
				"&#128548;",
				"&#128545;",
				"&#128544;",
				"&#129324;",
				"&#128520;",
				"&#128127;",
				"&#128128;",
				"&#9760;",
				"&#128169;",
				"&#129313;",
				"&#128121;",
				"&#128122;",
				"&#128123;",
				"&#128125;",
				"&#128126;",
				"&#129302;",
				"&#128570;",
				"&#128568;",
				"&#128569;",
				"&#128571;",
				"&#128572;",
				"&#128573;",
				"&#128576;",
				"&#128575;",
				"&#128574;",
				"&#128584;",
				"&#128585;",
				"&#128586;",
			],
		},
		{
			title: "Эмоции",
			id: "emotics",
			icons: [
				"&#128139;",
				"&#128140;",
				"&#128152;",
				"&#128157;",
				"&#128150;",
				"&#128151;",
				"&#128147;",
				"&#128158;",
				"&#128149;",
				"&#128159;",
				"&#10083;",
				"&#128148;",
				"&#10084;",
				"&#129505;",
				"&#128155;",
				"&#128154;",
				"&#128153;",
				"&#128156;",
				"&#128420;",
				"&#128175;",
				"&#128162;",
				"&#128165;",
				"&#128171;",
				"&#128166;",
				"&#128168;",
				"&#128371;",
				"&#128163;",
				"&#128172;",
				"&#128488;",
				"&#128495;",
				"&#128173;",
				"&#128164;",
			]
		},
		{
			title: "Люди",
			id: "people",
			icons: [
				"&#128075;",
				"&#129306;",
				"&#128400;",
				"&#9995;",
				"&#128406;",
				"&#128076;",
				"&#9996;",
				"&#129310;",
				"&#129311;",
				"&#129304;",
				"&#129305;",
				"&#128072;",
				"&#128073;",
				"&#128070;",
				"&#128405;",
				"&#128071;",
				"&#9757;",
				"&#128077;",
				"&#128078;",
				"&#9994;",
				"&#128074;",
				"&#129307;",
				"&#129308;",
				"&#128079;",
				"&#128588;",
				"&#128080;",
				"&#129330;",
				"&#129309;",
				"&#128591;",
				"&#9997;",
				"&#128133;",
				"&#129331;",
				"&#128170;",
				"&#129461;",
				"&#129462;",
				"&#128066;",
				"&#128067;",
				"&#129504;",
				"&#129463;",
				"&#129460;",
				"&#128064;",
				"&#128065;",
				"&#128069;",
				"&#128068;",
				"&#128118;",
				"&#129490;",
				"&#128102;",
				"&#128103;",
				"&#129489;",
				"&#128113;",
				"&#128104;",
				"&#129492;",
				"&#128105;",
				"&#129491;",
				"&#128116;",
				"&#128117;",
				"&#128589;",
				"&#128590;",
				"&#128581;",
				"&#128582;",
				"&#128129;",
				"&#128587;",
				"&#128583;",
				"&#129318;",
				"&#129335;",
				"&#128110;",
				"&#128373;",
				"&#128130;",
				"&#128119;",
				"&#129332;",
				"&#128120;",
				"&#128115;",
				"&#128114;",
				"&#129493;",
				"&#129333;",
				"&#128112;",
				"&#129328;",
				"&#129329;",
				"&#128124;",
				"&#127877;",
				"&#129334;",
				"&#129464;",
				"&#129465;",
				"&#129497;",
				"&#129498;",
				"&#129499;",
				"&#129500;",
				"&#129501;",
				"&#129502;",
				"&#129503;",
				"&#128134;",
				"&#128135;",
				"&#128694;",
				"&#127939;",
				"&#128131;",
				"&#128378;",
				"&#128372;",
				"&#128111;",
				"&#129494;",
				"&#129495;",
				"&#129338;",
				"&#127943;",
				"&#9975;",
				"&#127938;",
				"&#127948;",
				"&#127940;",
				"&#128675;",
				"&#127946;",
				"&#9977;",
				"&#127947;",
				"&#128692;",
				"&#128693;",
				"&#129336;",
				"&#129340;",
				"&#129341;",
				"&#129342;",
				"&#129337;",
				"&#129496;",
				"&#128704;",
				"&#128716;",
				"&#128109;",
				"&#128107;",
				"&#128108;",
				"&#128143;",
				"&#128145;",
				"&#128106;",
				"&#128483;",
				"&#128100;",
			]
		},
		{
			title: "Животные",
			id: "animals",
			icons: [
				"&#128053;",
				"&#128018;",
				"&#129421;",
				"&#128054;",
				"&#128021;",
				"&#128041;",
				"&#128058;",
				"&#129418;",
				"&#129437;",
				"&#128049;",
				"&#128008;",
				"&#129409;",
				"&#128047;",
				"&#128005;",
				"&#128006;",
				"&#128052;",
				"&#128014;",
				"&#129412;",
				"&#129427;",
				"&#129420;",
				"&#128046;",
				"&#128002;",
				"&#128003;",
				"&#128004;",
				"&#128055;",
				"&#128022;",
				"&#128023;",
				"&#128061;",
				"&#128015;",
				"&#128017;",
				"&#128016;",
				"&#128042;",
				"&#128043;",
				"&#129433;",
				"&#129426;",
				"&#128024;",
				"&#129423;",
				"&#129435;",
				"&#128045;",
				"&#128001;",
				"&#128000;",
				"&#128057;",
				"&#128048;",
				"&#128007;",
				"&#128063;",
				"&#129428;",
				"&#129415;",
				"&#128059;",
				"&#128040;",
				"&#128060;",
				"&#129432;",
				"&#129441;",
				"&#128062;",
				"&#129411;",
				"&#128020;",
				"&#128019;",
				"&#128035;",
				"&#128036;",
				"&#128037;",
				"&#128038;",
				"&#128039;",
				"&#128330;",
				"&#129413;",
				"&#129414;",
				"&#129442;",
				"&#129417;",
				"&#129434;",
				"&#129436;",
				"&#128056;",
				"&#128010;",
				"&#128034;",
				"&#129422;",
				"&#128013;",
				"&#128050;",
				"&#128009;",
				"&#129429;",
				"&#129430;",
				"&#128051;",
				"&#128011;",
				"&#128044;",
				"&#128031;",
				"&#128032;",
				"&#128033;",
				"&#129416;",
				"&#128025;",
				"&#128026;",
				"&#128012;",
				"&#129419;",
				"&#128027;",
				"&#128028;",
				"&#128029;",
				"&#128030;",
				"&#129431;",
				"&#128375;",
				"&#128376;",
				"&#129410;",
				"&#129439;",
				"&#129440;",
			]
		},
		{
			title: "Природа",
			id: "nature",
			icons: [
				"&#128144;",
				"&#127800;",
				"&#128174;",
				"&#127989;",
				"&#127801;",
				"&#129344;",
				"&#127802;",
				"&#127803;",
				"&#127804;",
				"&#127799;",
				"&#127793;",
				"&#127794;",
				"&#127795;",
				"&#127796;",
				"&#127797;",
				"&#127806;",
				"&#127807;",
				"&#9752;",
				"&#127808;",
				"&#127809;",
				"&#127810;",
				"&#127811;",
			]
		},
		{
			title: "Еда и напитки",
			id: "food",
			icons: [
				"&#127815;",
				"&#127816;",
				"&#127817;",
				"&#127818;",
				"&#127819;",
				"&#127820;",
				"&#127821;",
				"&#129389;",
				"&#127822;",
				"&#127823;",
				"&#127824;",
				"&#127825;",
				"&#127826;",
				"&#127827;",
				"&#129373;",
				"&#127813;",
				"&#129381;",
				"&#129361;",
				"&#127814;",
				"&#129364;",
				"&#129365;",
				"&#127805;",
				"&#127798;",
				"&#129362;",
				"&#129388;",
				"&#129382;",
				"&#127812;",
				"&#129372;",
				"&#127792;",
				"&#127838;",
				"&#129360;",
				"&#129366;",
				"&#129384;",
				"&#129391;",
				"&#129374;",
				"&#129472;",
				"&#127830;",
				"&#127831;",
				"&#129385;",
				"&#129363;",
				"&#127828;",
				"&#127839;",
				"&#127829;",
				"&#127789;",
				"&#129386;",
				"&#127790;",
				"&#127791;",
				"&#129369;",
				"&#129370;",
				"&#127859;",
				"&#129368;",
				"&#127858;",
				"&#129379;",
				"&#129367;",
				"&#127871;",
				"&#129474;",
				"&#129387;",
				"&#127857;",
				"&#127832;",
				"&#127833;",
				"&#127834;",
				"&#127835;",
				"&#127836;",
				"&#127837;",
				"&#127840;",
				"&#127842;",
				"&#127843;",
				"&#127844;",
				"&#127845;",
				"&#129390;",
				"&#127841;",
				"&#129375;",
				"&#129376;",
				"&#129377;",
				"&#129408;",
				"&#129438;",
				"&#129424;",
				"&#129425;",
				"&#127846;",
				"&#127847;",
				"&#127848;",
				"&#127849;",
				"&#127850;",
				"&#127874;",
				"&#127856;",
				"&#129473;",
				"&#129383;",
				"&#127851;",
				"&#127852;",
				"&#127853;",
				"&#127854;",
				"&#127855;",
				"&#127868;",
				"&#129371;",
				"&#9749;",
				"&#127861;",
				"&#127862;",
				"&#127870;",
				"&#127863;",
				"&#127864;",
				"&#127865;",
				"&#127866;",
				"&#127867;",
				"&#129346;",
				"&#129347;",
				"&#129380;",
				"&#129378;",
				"&#127869;",
				"&#127860;",
				"&#129348;",
				"&#128298;",
				"&#127994;",
			]
		},
		{
			title: "Места и путешествия",
			id: "travel",
			icons: [
				"&#127757;",
				"&#127758;",
				"&#127759;",
				"&#127760;",
				"&#128506;",
				"&#128510;",
				"&#129517;",
				"&#127956;",
				"&#9968;",
				"&#127755;",
				"&#128507;",
				"&#127957;",
				"&#127958;",
				"&#127964;",
				"&#127965;",
				"&#127966;",
				"&#127967;",
				"&#127963;",
				"&#127959;",
				"&#129521;",
				"&#127960;",
				"&#127962;",
				"&#127968;",
				"&#127969;",
				"&#127970;",
				"&#127971;",
				"&#127972;",
				"&#127973;",
				"&#127974;",
				"&#127976;",
				"&#127977;",
				"&#127978;",
				"&#127979;",
				"&#127980;",
				"&#127981;",
				"&#127983;",
				"&#127984;",
				"&#128146;",
				"&#128508;",
				"&#128509;",
				"&#9962;",
				"&#128332;",
				"&#128333;",
				"&#9961;",
				"&#128331;",
				"&#9970;",
				"&#9978;",
				"&#127745;",
				"&#127747;",
				"&#127961;",
				"&#127748;",
				"&#127749;",
				"&#127750;",
				"&#127751;",
				"&#127753;",
				"&#9832;",
				"&#127756;",
				"&#127904;",
				"&#127905;",
				"&#127906;",
				"&#128136;",
				"&#127914;",
				"&#128642;",
				"&#128643;",
				"&#128644;",
				"&#128645;",
				"&#128646;",
				"&#128647;",
				"&#128648;",
				"&#128649;",
				"&#128650;",
				"&#128669;",
				"&#128670;",
				"&#128651;",
				"&#128652;",
				"&#128653;",
				"&#128654;",
				"&#128656;",
				"&#128657;",
				"&#128658;",
				"&#128659;",
				"&#128660;",
				"&#128661;",
				"&#128662;",
				"&#128663;",
				"&#128664;",
				"&#128665;",
				"&#128666;",
				"&#128667;",
				"&#128668;",
				"&#127950;",
				"&#127949;",
				"&#128757;",
				"&#128690;",
				"&#128756;",
				"&#128761;",
				"&#128655;",
				"&#128739;",
				"&#128740;",
				"&#128738;",
				"&#9981;",
				"&#128680;",
				"&#128677;",
				"&#128678;",
				"&#128721;",
				"&#128679;",
				"&#9875;",
				"&#9973;",
				"&#128758;",
				"&#128676;",
				"&#128755;",
				"&#9972;",
				"&#128741;",
				"&#128674;",
				"&#9992;",
				"&#128745;",
				"&#128747;",
				"&#128748;",
				"&#128186;",
				"&#128641;",
				"&#128671;",
				"&#128672;",
				"&#128673;",
				"&#128752;",
				"&#128640;",
				"&#128760;",
				"&#128718;",
				"&#129523;",
				"&#8987;",
				"&#9203;",
				"&#8986;",
				"&#9200;",
				"&#9201;",
				"&#9202;",
				"&#128368;",
				"&#128347;",
				"&#128359;",
				"&#128336;",
				"&#128348;",
				"&#128337;",
				"&#128349;",
				"&#128338;",
				"&#128350;",
				"&#128339;",
				"&#128351;",
				"&#128340;",
				"&#128352;",
				"&#128341;",
				"&#128353;",
				"&#128342;",
				"&#128354;",
				"&#128343;",
				"&#128355;",
				"&#128344;",
				"&#128356;",
				"&#128345;",
				"&#128357;",
				"&#128346;",
				"&#128358;",
				"&#127761;",
				"&#127762;",
				"&#127763;",
				"&#127764;",
				"&#127765;",
				"&#127766;",
				"&#127767;",
				"&#127768;",
				"&#127769;",
				"&#127770;",
				"&#127771;",
				"&#127772;",
				"&#127777;",
				"&#9728;",
				"&#127773;",
				"&#127774;",
				"&#11088;",
				"&#127775;",
				"&#127776;",
				"&#9729;",
				"&#9925;",
				"&#9928;",
				"&#127780;",
				"&#127781;",
				"&#127782;",
				"&#127783;",
				"&#127784;",
				"&#127785;",
				"&#127786;",
				"&#127787;",
				"&#127788;",
				"&#127744;",
				"&#127752;",
				"&#127746;",
				"&#9730;",
				"&#9748;",
				"&#9969;",
				"&#9889;",
				"&#10052;",
				"&#9731;",
				"&#9924;",
				"&#9732;",
				"&#128293;",
				"&#128167;",
				"&#127754;",
			]
		},
		{
			title: "Мероприятия и праздники",
			id: "activy",
			icons: [
				"&#127875;",
				"&#127876;",
				"&#127878;",
				"&#127879;",
				"&#129512;",
				"&#10024;",
				"&#127880;",
				"&#127881;",
				"&#127882;",
				"&#127883;",
				"&#127885;",
				"&#127886;",
				"&#127887;",
				"&#127888;",
				"&#127889;",
				"&#129511;",
				"&#127872;",
				"&#127873;",
				"&#127895;",
				"&#127903;",
				"&#127915;",
				"&#127894;",
				"&#127942;",
				"&#127941;",
				"&#129351;",
				"&#129352;",
				"&#129353;",
				"&#9917;",
				"&#9918;",
				"&#129358;",
				"&#127936;",
				"&#127952;",
				"&#127944;",
				"&#127945;",
				"&#127934;",
				"&#129359;",
				"&#127923;",
				"&#127951;",
				"&#127953;",
				"&#127954;",
				"&#129357;",
				"&#127955;",
				"&#127992;",
				"&#129354;",
				"&#129355;",
				"&#129349;",
				"&#9971;",
				"&#9976;",
				"&#127907;",
				"&#127933;",
				"&#127935;",
				"&#128759;",
				"&#129356;",
				"&#127919;",
				"&#127921;",
				"&#128302;",
				"&#129535;",
				"&#127918;",
				"&#128377;",
				"&#127920;",
				"&#127922;",
				"&#129513;",
				"&#129528;",
				"&#9824;",
				"&#9829;",
				"&#9830;",
				"&#9827;",
				"&#9823;",
				"&#127183;",
				"&#126980;",
				"&#127924;",
				"&#127917;",
				"&#128444;",
				"&#127912;",
				"&#129525;",
				"&#129526;",
			]
		},
		{
			title: "Объекты и вещи",
			id: "objects",
			icons: [
				"&#128083;",
				"&#128374;",
				"&#129405;",
				"&#129404;",
				"&#128084;",
				"&#128085;",
				"&#128086;",
				"&#129507;",
				"&#129508;",
				"&#129509;",
				"&#129510;",
				"&#128087;",
				"&#128088;",
				"&#128089;",
				"&#128090;",
				"&#128091;",
				"&#128092;",
				"&#128093;",
				"&#128717;",
				"&#127890;",
				"&#128094;",
				"&#128095;",
				"&#129406;",
				"&#129407;",
				"&#128096;",
				"&#128097;",
				"&#128098;",
				"&#128081;",
				"&#128082;",
				"&#127913;",
				"&#127891;",
				"&#129506;",
				"&#9937;",
				"&#128255;",
				"&#128132;",
				"&#128141;",
				"&#128142;",
				"&#128263;",
				"&#128264;",
				"&#128265;",
				"&#128266;",
				"&#128226;",
				"&#128227;",
				"&#128239;",
				"&#128276;",
				"&#128277;",
				"&#127932;",
				"&#127925;",
				"&#127926;",
				"&#127897;",
				"&#127898;",
				"&#127899;",
				"&#127908;",
				"&#127911;",
				"&#128251;",
				"&#127927;",
				"&#127928;",
				"&#127929;",
				"&#127930;",
				"&#127931;",
				"&#129345;",
				"&#128241;",
				"&#128242;",
				"&#9742;",
				"&#128222;",
				"&#128223;",
				"&#128224;",
				"&#128267;",
				"&#128268;",
				"&#128187;",
				"&#128421;",
				"&#128424;",
				"&#9000;",
				"&#128433;",
				"&#128434;",
				"&#128189;",
				"&#128190;",
				"&#128191;",
				"&#128192;",
				"&#129518;",
				"&#127909;",
				"&#127902;",
				"&#128253;",
				"&#127916;",
				"&#128250;",
				"&#128247;",
				"&#128248;",
				"&#128249;",
				"&#128252;",
				"&#128269;",
				"&#128270;",
				"&#128367;",
				"&#128161;",
				"&#128294;",
				"&#127982;",
				"&#128212;",
				"&#128213;",
				"&#128214;",
				"&#128215;",
				"&#128216;",
				"&#128217;",
				"&#128218;",
				"&#128211;",
				"&#128210;",
				"&#128195;",
				"&#128220;",
				"&#128196;",
				"&#128240;",
				"&#128478;",
				"&#128209;",
				"&#128278;",
				"&#127991;",
				"&#128176;",
				"&#128180;",
				"&#128181;",
				"&#128182;",
				"&#128183;",
				"&#128184;",
				"&#128179;",
				"&#129534;",
				"&#128185;",
				"&#128177;",
				"&#128178;",
				"&#9993;",
				"&#128231;",
				"&#128232;",
				"&#128233;",
				"&#128228;",
				"&#128229;",
				"&#128230;",
				"&#128235;",
				"&#128234;",
				"&#128236;",
				"&#128237;",
				"&#128238;",
				"&#128499;",
				"&#9999;",
				"&#10002;",
				"&#128395;",
				"&#128394;",
				"&#128396;",
				"&#128397;",
				"&#128221;",
				"&#128188;",
				"&#128193;",
				"&#128194;",
				"&#128450;",
				"&#128197;",
				"&#128198;",
				"&#128466;",
				"&#128467;",
				"&#128199;",
				"&#128200;",
				"&#128201;",
				"&#128202;",
				"&#128203;",
				"&#128204;",
				"&#128205;",
				"&#128206;",
				"&#128391;",
				"&#128207;",
				"&#128208;",
				"&#9986;",
				"&#128451;",
				"&#128452;",
				"&#128465;",
				"&#128274;",
				"&#128275;",
				"&#128271;",
				"&#128272;",
				"&#128273;",
				"&#128477;",
				"&#128296;",
				"&#9935;",
				"&#9874;",
				"&#128736;",
				"&#128481;",
				"&#9876;",
				"&#128299;",
				"&#127993;",
				"&#128737;",
				"&#128295;",
				"&#128297;",
				"&#9881;",
				"&#128476;",
				"&#9878;",
				"&#128279;",
				"&#9939;",
				"&#129520;",
				"&#129522;",
				"&#9879;",
				"&#129514;",
				"&#129515;",
				"&#129516;",
				"&#128300;",
				"&#128301;",
				"&#128225;",
				"&#128137;",
				"&#128138;",
				"&#128682;",
				"&#128719;",
				"&#128715;",
				"&#128701;",
				"&#128703;",
				"&#128705;",
				"&#129524;",
				"&#129527;",
				"&#129529;",
				"&#129530;",
				"&#129531;",
				"&#129532;",
				"&#129533;",
				"&#129519;",
				"&#128722;",
				"&#128684;",
				"&#9904;",
				"&#9905;",
				"&#128511;",
			]
		},
		{
			title: "Символы",
			id: "symbols",
			icons: [
				"&#127975;",
				"&#128686;",
				"&#128688;",
				"&#9855;",
				"&#128697;",
				"&#128698;",
				"&#128699;",
				"&#128700;",
				"&#128702;",
				"&#128706;",
				"&#128707;",
				"&#128708;",
				"&#128709;",
				"&#9888;",
				"&#128696;",
				"&#9940;",
				"&#128683;",
				"&#128691;",
				"&#128685;",
				"&#128687;",
				"&#128689;",
				"&#128695;",
				"&#128245;",
				"&#128286;",
				"&#9762;",
				"&#9763;",
				"&#11014;",
				"&#8599;",
				"&#10145;",
				"&#8600;",
				"&#11015;",
				"&#8601;",
				"&#11013;",
				"&#8598;",
				"&#8597;",
				"&#8596;",
				"&#8617;",
				"&#8618;",
				"&#10548;",
				"&#10549;",
				"&#128259;",
				"&#128260;",
				"&#128281;",
				"&#128282;",
				"&#128283;",
				"&#128284;",
				"&#128285;",
				"&#128720;",
				"&#9883;",
				"&#128329;",
				"&#10017;",
				"&#9784;",
				"&#9775;",
				"&#10013;",
				"&#9766;",
				"&#9770;",
				"&#9774;",
				"&#128334;",
				"&#128303;",
				"&#9800;",
				"&#9801;",
				"&#9802;",
				"&#9803;",
				"&#9804;",
				"&#9805;",
				"&#9806;",
				"&#9807;",
				"&#9808;",
				"&#9809;",
				"&#9810;",
				"&#9811;",
				"&#9934;",
				"&#128256;",
				"&#128257;",
				"&#128258;",
				"&#9654;",
				"&#9193;",
				"&#9197;",
				"&#9199;",
				"&#9664;",
				"&#9194;",
				"&#9198;",
				"&#128316;",
				"&#9195;",
				"&#128317;",
				"&#9196;",
				"&#9208;",
				"&#9209;",
				"&#9210;",
				"&#9167;",
				"&#127910;",
				"&#128261;",
				"&#128262;",
				"&#128246;",
				"&#128243;",
				"&#128244;",
				"&#9792;",
				"&#9794;",
				"&#9877;",
				"&#9854;",
				"&#9851;",
				"&#9884;",
				"&#128305;",
				"&#128219;",
				"&#128304;",
				"&#11093;",
				"&#9989;",
				"&#9745;",
				"&#10004;",
				"&#10006;",
				"&#10060;",
				"&#10062;",
				"&#10133;",
				"&#10134;",
				"&#10135;",
				"&#10160;",
				"&#10175;",
				"&#12349;",
				"&#10035;",
				"&#10036;",
				"&#10055;",
				"&#8252;",
				"&#8265;",
				"&#10067;",
				"&#10068;",
				"&#10069;",
				"&#10071;",
				"&#12336;",
				"&#169;",
				"&#174;",
				"&#8482;",
				"&#128287;",
				"&#128288;",
				"&#128289;",
				"&#128290;",
				"&#128291;",
				"&#128292;",
				"&#127344;",
				"&#127374;",
				"&#127345;",
				"&#127377;",
				"&#127378;",
				"&#127379;",
				"&#8505;",
				"&#127380;",
				"&#9410;",
				"&#127381;",
				"&#127382;",
				"&#127358;",
				"&#127383;",
				"&#127359;",
				"&#127384;",
				"&#127385;",
				"&#127386;",
				"&#127489;",
				"&#127490;",
				"&#127543;",
				"&#127542;",
				"&#127535;",
				"&#127568;",
				"&#127545;",
				"&#127514;",
				"&#127538;",
				"&#127569;",
				"&#127544;",
				"&#127540;",
				"&#127539;",
				"&#12951;",
				"&#12953;",
				"&#127546;",
				"&#127541;",
				"&#128308;",
				"&#128309;",
				"&#9898;",
				"&#9899;",
				"&#11036;",
				"&#11035;",
				"&#9724;",
				"&#9723;",
				"&#9725;",
				"&#9726;",
				"&#9643;",
				"&#9642;",
				"&#128310;",
				"&#128311;",
				"&#128312;",
				"&#128313;",
				"&#128314;",
				"&#128315;",
				"&#128160;",
				"&#128280;",
				"&#128306;",
				"&#128307;",
			]
		},
		{
			title: "Флаги",
			id: "flags",
			icons: [
				"&#127937;",
				"&#128681;",
				"&#127884;",
				"&#127988;",
				"&#127987;",
				"&#127987;&#65039;&#8205;&#127752;",
				"&#127988;&#8205;&#9760;&#65039;",
				"&#127462;&#127464;",
				"&#127462;&#127465;",
				"&#127462;&#127466;",
				"&#127462;&#127467;",
				"&#127462;&#127468;",
				"&#127462;&#127470;",
				"&#127462;&#127473;",
				"&#127462;&#127474;",
				"&#127462;&#127476;",
				"&#127462;&#127478;",
				"&#127462;&#127479;",
				"&#127462;&#127480;",
				"&#127462;&#127481;",
				"&#127462;&#127482;",
				"&#127462;&#127484;",
				"&#127462;&#127485;",
				"&#127462;&#127487;",
				"&#127463;&#127462;",
				"&#127463;&#127463;",
				"&#127463;&#127465;",
				"&#127463;&#127466;",
				"&#127463;&#127467;",
				"&#127463;&#127468;",
				"&#127463;&#127469;",
				"&#127463;&#127470;",
				"&#127463;&#127471;",
				"&#127463;&#127473;",
				"&#127463;&#127474;",
				"&#127463;&#127475;",
				"&#127463;&#127476;",
				"&#127463;&#127478;",
				"&#127463;&#127479;",
				"&#127463;&#127480;",
				"&#127463;&#127481;",
				"&#127463;&#127483;",
				"&#127463;&#127484;",
				"&#127463;&#127486;",
				"&#127463;&#127487;",
				"&#127464;&#127462;",
				"&#127464;&#127464;",
				"&#127464;&#127465;",
				"&#127464;&#127467;",
				"&#127464;&#127468;",
				"&#127464;&#127469;",
				"&#127464;&#127470;",
				"&#127464;&#127472;",
				"&#127464;&#127473;",
				"&#127464;&#127474;",
				"&#127464;&#127475;",
				"&#127464;&#127476;",
				"&#127464;&#127477;",
				"&#127464;&#127479;",
				"&#127464;&#127482;",
				"&#127464;&#127483;",
				"&#127464;&#127484;",
				"&#127464;&#127485;",
				"&#127464;&#127486;",
				"&#127464;&#127487;",
				"&#127465;&#127466;",
				"&#127465;&#127468;",
				"&#127465;&#127471;",
				"&#127465;&#127472;",
				"&#127465;&#127474;",
				"&#127465;&#127476;",
				"&#127465;&#127487;",
				"&#127466;&#127462;",
				"&#127466;&#127464;",
				"&#127466;&#127466;",
				"&#127466;&#127468;",
				"&#127466;&#127469;",
				"&#127466;&#127479;",
				"&#127466;&#127480;",
				"&#127466;&#127481;",
				"&#127466;&#127482;",
				"&#127467;&#127470;",
				"&#127467;&#127471;",
				"&#127467;&#127472;",
				"&#127467;&#127474;",
				"&#127467;&#127476;",
				"&#127467;&#127479;",
				"&#127468;&#127462;",
				"&#127468;&#127463;",
				"&#127468;&#127465;",
				"&#127468;&#127466;",
				"&#127468;&#127467;",
				"&#127468;&#127468;",
				"&#127468;&#127469;",
				"&#127468;&#127470;",
				"&#127468;&#127473;",
				"&#127468;&#127474;",
				"&#127468;&#127475;",
				"&#127468;&#127477;",
				"&#127468;&#127478;",
				"&#127468;&#127479;",
				"&#127468;&#127480;",
				"&#127468;&#127481;",
				"&#127468;&#127482;",
				"&#127468;&#127484;",
				"&#127468;&#127486;",
				"&#127469;&#127472;",
				"&#127469;&#127474;",
				"&#127469;&#127475;",
				"&#127469;&#127479;",
				"&#127469;&#127481;",
				"&#127469;&#127482;",
				"&#127470;&#127464;",
				"&#127470;&#127465;",
				"&#127470;&#127466;",
				"&#127470;&#127473;",
				"&#127470;&#127474;",
				"&#127470;&#127475;",
				"&#127470;&#127476;",
				"&#127470;&#127478;",
				"&#127470;&#127479;",
				"&#127470;&#127480;",
				"&#127470;&#127481;",
				"&#127471;&#127466;",
				"&#127471;&#127474;",
				"&#127471;&#127476;",
				"&#127471;&#127477;",
				"&#127472;&#127466;",
				"&#127472;&#127468;",
				"&#127472;&#127469;",
				"&#127472;&#127470;",
				"&#127472;&#127474;",
				"&#127472;&#127475;",
				"&#127472;&#127477;",
				"&#127472;&#127479;",
				"&#127472;&#127484;",
				"&#127472;&#127486;",
				"&#127472;&#127487;",
				"&#127473;&#127462;",
				"&#127473;&#127463;",
				"&#127473;&#127464;",
				"&#127473;&#127470;",
				"&#127473;&#127472;",
				"&#127473;&#127479;",
				"&#127473;&#127480;",
				"&#127473;&#127481;",
				"&#127473;&#127482;",
				"&#127473;&#127483;",
				"&#127473;&#127486;",
				"&#127474;&#127462;",
				"&#127474;&#127464;",
				"&#127474;&#127465;",
				"&#127474;&#127466;",
				"&#127474;&#127467;",
				"&#127474;&#127468;",
				"&#127474;&#127469;",
				"&#127474;&#127472;",
				"&#127474;&#127473;",
				"&#127474;&#127474;",
				"&#127474;&#127475;",
				"&#127474;&#127476;",
				"&#127474;&#127477;",
				"&#127474;&#127478;",
				"&#127474;&#127479;",
				"&#127474;&#127480;",
				"&#127474;&#127481;",
				"&#127474;&#127482;",
				"&#127474;&#127483;",
				"&#127474;&#127484;",
				"&#127474;&#127485;",
				"&#127474;&#127486;",
				"&#127474;&#127487;",
				"&#127475;&#127462;",
				"&#127475;&#127464;",
				"&#127475;&#127466;",
				"&#127475;&#127467;",
				"&#127475;&#127468;",
				"&#127475;&#127470;",
				"&#127475;&#127473;",
				"&#127475;&#127476;",
				"&#127475;&#127477;",
				"&#127475;&#127479;",
				"&#127475;&#127482;",
				"&#127475;&#127487;",
				"&#127476;&#127474;",
				"&#127477;&#127462;",
				"&#127477;&#127466;",
				"&#127477;&#127467;",
				"&#127477;&#127468;",
				"&#127477;&#127469;",
				"&#127477;&#127472;",
				"&#127477;&#127473;",
				"&#127477;&#127474;",
				"&#127477;&#127475;",
				"&#127477;&#127479;",
				"&#127477;&#127480;",
				"&#127477;&#127481;",
				"&#127477;&#127484;",
				"&#127477;&#127486;",
				"&#127478;&#127462;",
				"&#127479;&#127466;",
				"&#127479;&#127476;",
				"&#127479;&#127480;",
				"&#127479;&#127482;",
				"&#127479;&#127484;",
				"&#127480;&#127462;",
				"&#127480;&#127463;",
				"&#127480;&#127464;",
				"&#127480;&#127465;",
				"&#127480;&#127466;",
				"&#127480;&#127468;",
				"&#127480;&#127469;",
				"&#127480;&#127470;",
				"&#127480;&#127471;",
				"&#127480;&#127472;",
				"&#127480;&#127473;",
				"&#127480;&#127474;",
				"&#127480;&#127475;",
				"&#127480;&#127476;",
				"&#127480;&#127479;",
				"&#127480;&#127480;",
				"&#127480;&#127481;",
				"&#127480;&#127483;",
				"&#127480;&#127485;",
				"&#127480;&#127486;",
				"&#127480;&#127487;",
				"&#127481;&#127462;",
				"&#127481;&#127464;",
				"&#127481;&#127465;",
				"&#127481;&#127467;",
				"&#127481;&#127468;",
				"&#127481;&#127469;",
				"&#127481;&#127471;",
				"&#127481;&#127472;",
				"&#127481;&#127473;",
				"&#127481;&#127474;",
				"&#127481;&#127475;",
				"&#127481;&#127476;",
				"&#127481;&#127479;",
				"&#127481;&#127481;",
				"&#127481;&#127483;",
				"&#127481;&#127484;",
				"&#127481;&#127487;",
				"&#127482;&#127462;",
				"&#127482;&#127468;",
				"&#127482;&#127474;",
				"&#127482;&#127475;",
				"&#127482;&#127480;",
				"&#127482;&#127486;",
				"&#127482;&#127487;",
				"&#127483;&#127462;",
				"&#127483;&#127464;",
				"&#127483;&#127466;",
				"&#127483;&#127468;",
				"&#127483;&#127470;",
				"&#127483;&#127475;",
				"&#127483;&#127482;",
				"&#127484;&#127467;",
				"&#127484;&#127480;",
				"&#127485;&#127472;",
				"&#127486;&#127466;",
				"&#127486;&#127481;",
				"&#127487;&#127462;",
				"&#127487;&#127474;",
				"&#127487;&#127484;",
				"&#127988;&#917607;&#917602;&#917605;&#917614;&#917607;&#917631;",
				"&#127988;&#917607;&#917602;&#917619;&#917603;&#917620;&#917631;",
				"&#127988;&#917607;&#917602;&#917623;&#917612;&#917619;&#917631;",
			]
		}
	];
	const main = () => {
	const link = document.createElement("link");
		link.rel = "stylesheet";
		link.type = "text/css";
		link.href = "/assets/templates/projectsoft/css/emoji.min.css?" + (new Date()).getTime();

		const block = document.createElement("div");
		block.classList.add("emoji-wrapp");
		
		const tabs = document.createElement("div");
		tabs.classList.add("emoji-tabs");

		const content = document.createElement("div");
		content.classList.add("emoji-content");

		const script = document.currentScript;
		if(script) {
			script.insertAdjacentElement("beforebegin", document.createElement("hr"));
			let h3Title = document.createElement("h3");
			let pContent = document.createElement("p");
			h3Title.innerText = "Включена поддержка текстовых EMOJI";
			pContent.innerText = "Кликните по иконке Emoji и она скопируется в буфер.";
			h3Title.classList.add("red");
			script.insertAdjacentElement("beforebegin", h3Title);
			script.insertAdjacentElement("beforebegin", pContent);
			let active = !0;
			for(let index in emojies){
				let emo = emojies[index];
				let title = emo.title;
				let id = emo.id;
				// Tab
				let tab = document.createElement("div");
				tab.classList.add("tabs-item");
				// Label
				let label = document.createElement("label");
				label.innerText = title;
				label.setAttribute('for', "emoji-radio-" + id);
				// Input
				let input = document.createElement("input");
				input.id = "emoji-radio-" + id;
				input.type = "radio";
				input.name = "emoji";
				input.value = id;
				// Emoji`s
				let content_emoji = document.createElement("div");
				content_emoji.classList.add("tabs-content");
				content_emoji.classList.add("clearfix");
				content_emoji.id = "emoji-" + id;
				// Title
				let h = document.createElement("h2");
				h.classList.add("text-center");
				h.innerText = title;
				// Icons wrapp
				let wrapp = document.createElement("div");
				wrapp.classList.add("emoji-icons-wrapp");
				active && (
					tab.classList.add("active"),
					content_emoji.classList.add("active"),
					input.setAttribute("checked", "checked")
				);
				for(let icon_index in emo.icons){
					let emoji = emo.icons[icon_index];
					let span = document.createElement("span");
					span.classList.add("emoji--icon");
					span.innerHTML = emoji;
					span.setAttribute("data-copy", "");
					wrapp.append(span);
				}
				label.append(input);
				tab.append(label);
				tabs.append(tab);
				content_emoji.append(h);
				content_emoji.append(wrapp);
				content.append(content_emoji);
				active = !1;
			}
			block.append(tabs);
			block.append(content);
			script.insertAdjacentElement("beforebegin", block);
			script.insertAdjacentElement("beforebegin", link);
		}

		/**
		 * Проверяем clipboard
		 */
		if(navigator.clipboard){
			!document.body.classList.contains("clipboard") && document.body.classList.add('clipboard');
		}
		/**
		 * Изменяем location.hash при клике по табу
		 */
		function showEmoji(input) {
			if(Boolean(input)){
				if(input.tagName == 'INPUT'){
					let id = input.id;
					if(id) {
						window.location.hash = id;
					}
				}
			}
		}

		/**
		 * Очистка после копирования
		 * если нет поддержки navigator.clipboard
		 */
		function clearSelection(span){
			if (window.getSelection) {
				window.getSelection().removeAllRanges();
			} else if (document.selection) {
				document.selection.empty();
			}
			span.setAttribute("data-copy", "Copied");
			setTimeout(function(){
				span.classList.remove('copy');
				span.setAttribute("data-copy", "");
			}, 500);
		}

		/**
		 * Клик по иконке
		 * Копирование
		 */
		document.addEventListener('click', async function(e){
			if(e.target.classList.contains('emoji--icon')){
				let span = e.target,
					html = "", rng;
				if(navigator.clipboard){
					span.classList.remove('copy');
					span.classList.remove('error');
					span.classList.add('copy');
					navigator.clipboard.writeText(span.firstChild.nodeValue).then(function(){
						span.setAttribute("data-copy", "Copied");
						setTimeout(function(){
							span.classList.remove('copy');
							span.setAttribute("data-copy", "");
						}, 500);
					}).catch(function(){
						span.setAttribute("data-copy", "ERROR");
						span.classList.remove('copy');
						span.classList.add('error');
						setTimeout(function(){
							span.classList.remove('error');
							span.setAttribute("data-copy", "");
						}, 1000);
					});
				}else{
					span.classList.remove('copy');
					span.classList.remove('error');
					span.classList.add('copy');
					let rnd, sel
					if (document.createRange) {
						rng = document.createRange();
						rng.selectNode(span)
						sel = window.getSelection();
						sel.removeAllRanges();
						sel.addRange(rng);
						document.execCommand("copy");
						clearSelection(span);
					} else {
						rng = document.body.createTextRange();
						rng.moveToElementText(target);
						rng.select();
						document.execCommand("copy");
						clearSelection(span);
					}
				}
			}
		});

		/**
		 * Клик по табу
		 */
		document.addEventListener("input", function(e){
			if(e.target.name && e.target.name == "emoji"){
				e.preventDefault();
				let input = e.target;
				let value = e.target.value;
				let wrap = input.closest('.emoji-wrapp');
				let emoji_tabs = input.closest('.emoji-tabs');
				let tab = input.closest('.tabs-item');
				let tabs_item = [...emoji_tabs.querySelectorAll('.tabs-item')];
				let tabs_content = [...wrap.querySelectorAll('.tabs-content')]
				tabs_item.forEach(function(a, b, c){
					a.classList.remove('active');
				});
				tabs_content.forEach(function(a, b, c){
					a.classList.remove('active');
				});
				let tb = wrap.querySelector("#emoji-" + value);
				tb && tb.classList.add('active');
				tab.classList.add('active');
				showEmoji(input);
				return !1;
			}
		});

		/**
		 * location.hash при загрузке
		 * Функция не идеальна. Нужна дороботка
		 */
		
		let idHash = window.location.hash;
		if(idHash){
			let inp = window.document.querySelector(idHash);
			if(Boolean(inp)){
				if(inp.tagName == 'INPUT'){
					inp.checked = true;
					let event = new Event('input', {
						bubbles: true,
						cancelable: true,
						target: inp
					});
					inp.dispatchEvent(event);
					//setTimeout(function(){inp.closest('.tabs-item').scrollIntoView({behavior: "smooth"});}, 200);
				}
			}
		}
	}
	main();
}());