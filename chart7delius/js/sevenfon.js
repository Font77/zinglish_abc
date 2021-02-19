var linecanvas_graphics ;
var colorSeg = 'white' ;
var TEXTCANVASLEFTX =2;var TEXTCANVASLEFTY =2;var curchartopleftx =TEXTCANVASLEFTX;var curchartoplefty =TEXTCANVASLEFTY;
var SEGVIDTH =8;var NEXTX =SEGVIDTH+4;var NEXTY =2*SEGVIDTH + 4 ; //14; 
var OFFSETBCX1 = SEGVIDTH;var OFFSETGFCY1 = SEGVIDTH;var OFFSETDY1 = 2*SEGVIDTH;
var SAIJ_DP =SEGVIDTH/3;
var OFFSET_DP_X = (SEGVIDTH-SAIJ_DP)/2 + 1;
var OFFSET_DP_UP_Y =  OFFSET_DP_X;
var OFFSET_DP_BELOW_Y = OFFSET_DP_X + SEGVIDTH;

var flagstartDpBlink = 0;
var drawSegNo =[];
var blinkColor=1;
var blinkTimer = 0;
var bitCheckerSetter = 1;
var flagDpRemoved = 1;
var reachedHere = 0;
var isEventKeyUpOrDaun = 0;
var stagesEventPassed = 0 ;//EVENT PROCESS IN GLOBAL VARIABLES
var isMouseEvent = 1 ;//REL6 ADD
var vhichKey = 16 ;//REL6 ADD
var vhichEvent = 0 ;//REL6 ADD
var vhichKeyDigit = 10 ;//REL6 ADD
var stateSpecialkeys = 0xC1 ;//REL6 ADD
var stateYelloKeys = 0xFF ;
var isNavigateSuccess = 0;//CURSOR NAVIGATION SUCCESS
var cursorVallEnd =0;//SCREENS
var cursorVallStart =0;
var isTekstLine = 0;
var isTekstArea = 0;
var flagdaylNumbersEnabled = 0 ;//EVENT PROCESSOUT
var isKrsrLeftRightEnabled = 0;
var isKrsrUpDaunEnabled = 0;
var isNiyuLineEnabled = 0;
//var flagEnableB15Common = 0;
//var flagEnableB8Common = 0;
var flagShiftKey = 0;
//var isMouseEvent = 0;

var flagEditLineOrLines = 0 ;
var commonEventHandleEnabled = 0 ;



var isTravelSuccess = 0;////SCREEN TRAVEL GLOBAL VARIABLES
var curRow =0;var curCol =0;
var cursorLastReachedInRow = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] ;////CURSOR NAVIGATION BELO
var cursorStartVallInRow = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] ;
var cursorEndVallInRow = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] ;
var cursorRowOfStartVall = 0;var cursorColOfStartVall = 0;var cursorRowOfEndVall = 0;var cursorColOfEndVall = 0;
var lastRowReached = 0 ;



var presentScreen =1;//////SCREEN RELATED GLOBAL VARIABLES BELO
var screenTextLength =256;
var screenTextCharIndex =0;
var currentTextLength =0;
var charIndexLast =0;
var charIndexFirst =0;
var MAXROW=15;var MAXCOL=15;var curRow =0;var curCol =0;
var flags8Segments = 128;//REL6ADD
var segList = [];
var screenSegList = [];
var Screens = [] ;
function Screen(){};


//#############MAIN PROC BELOW#########
document.write('<script type="text/javascript" src="codes_7.js"></script>');
document.write('<script type="text/javascript" src="utilFunctions.js"></script>');

document.write('<script type="text/javascript" src="screenTravel.js"></script>');	

document.write('<script type="text/javascript" src="tekstnavigation.js"></script>');
document.write('<script type="text/javascript" src="eventProcessOut.js"></script>');
