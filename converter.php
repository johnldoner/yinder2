<?
header('Content-Type:text/plain');
$string = "
3D Printing
A vintage scrapbook
Acting
Air sports
Aircraft spotting
Airsoft
Amateur astronomy
Amateur geology
Amateur radio
American football
Animal fancy
Antiquing
Antiquities[150]
Archery[70]
Archery[70]
Art collecting[137]
Association football[187]
Astrology[224]
Astronomy[71]
Audiophilia[218]
Australian rules football[188]
Auto audiophilia[151]
Auto racing[189]
Backpacking[72]
Badminton[160]
BASE jumping[73]
Baseball[190]
Baseball[74]
Basketball[75]
Baton Twirling[161]
Baton twirling[4]
Beach Volleyball[191]
Beekeeping[76]
Billiards[162]
Bird watching[77]
Birdwatching[77]
Board games[5]
Board sports[78]
Bodybuilding[79]
Book collecting[138]
Bowling[163]
Boxing[164]
Brazilian jiu-jitsu[80]
Breakdancing[192]
Bridge[165]
Bus spotting[225]
Calligraphy[6]
Candle making[7]
Card collecting[139]
Cheerleading[166]
Chess[167]
Climbing[106]
Coin collecting[140]
Color guard[168]
Coloring[10]
Comic book collecting[141]
Computer programming[8]
Cooking[9]
Cosplaying[11]
Couponing[12]
Creative writing[13]
Cricket[193]
Crocheting[14]
Cryptography[15]
Curling[169]
Cycling[194]
Cycling[81]
Dance[16]
Dancing[170]
Darts[171]
Debate[172]
Deltiology (postcard collecting)[142]
Digital arts[17]
Disc golf[195]
Dog sport[196]
Dowsing[82]
Drama[18]
Drawing[19]
Driving[83]
Electronics[20]
Element collecting[143]
Embroidery [21]
Equestrianism[197]
Exhibition Drill[198]
Fencing[173]
Field Hockey[199]
Figure skating[28]
Fishing[84]
Fishing[84]
Fishkeeping[219]
Flag Football[85]
Flower arranging[22]
Flower collecting and pressing[152]
Flying[86]
Footbag[201]
Foraging[87]
Foreign language learning[23]
Fossil hunting[153]
Gambling[25]
Gaming (tabletop games and role-playing games)[24]
Gardening[88]
Genealogy[26]
Geocaching[89]
Geocaching[89]
Ghost hunting[90]
Go[174]
Golfing[202]
Gongoozling[226]
Graffiti[91]
Gymnastics[175]
Handball[92]
Handball[92]
Herping[227]
Hiking[93]
Homebrewing[27]
Hooping[94]
Hunting[95]
Ice hockey[203]
Ice skating[28]
Inline skating[96]
Insect collecting[154]
Jewelry making[29]
Jigsaw puzzles[30]
Jogging[97]
Judo[204]
Juggling[31]
Jukskei[205]
Kart racing[206]
Kayaking[98]
Kite flying[99]
Kitesurfing[100]
Knitting[32]
Lacemaking[33]
Lapidary[34]
LARPing[101]
Laser tag[207]
Leather crafting[35]
Lego Building[36]
Letterboxing[102]
Listening to music[41]
Machining[37]
Macrame[38]
Magic[39]
Mahjong[178]
Marbles[176]
Martial arts[177]
Metal detecting[103]
Metal detecting[103]
Meteorology[228]
Microscopy[220]
Mineral collecting[155]
Model aircraft[208]
Model Building[40]
Motor sports[104]
Mountain biking[105]
Mountaineering[106]
Movie and movie memorabilia collecting[144]
Mushroom hunting/Mycology[107]
Netball[108]
Nordic skating[109]
Origami[42]
Paintball[110]
Painting[43]
Parkour[111]
People watching[229]
Photography[112]
Pigeon racing[209]
Playing musical instruments[44]
Poker[179]
Polo[113]
Pottery[45]
Puzzles[46]
Quilting[47]
Racquetball[210]
Radio-controlled car racing[211]
Rafting[114]
Rappelling[115]
Reading[221]
Reading[48]
Record collecting[145]
Rock balancing[156]
Rock climbing[106]
Roller Derby[212]
Roller skating[116]
Rugby league football[213]
Rugby[117]
Running[97]
Sailing[118]
Sand art[119]
Scrapbooking[49]
Scuba Diving[120]
Sculling or Rowing[121]
Sculpting[50]
Sea glass collecting[157]
Seashell collecting[158]
Sewing[51]
Shooting sport[214]
Shooting[122]
Shopping[123]
Shortwave listening[222]
Singing[52]
Skateboarding[124]
Skateboarding[215]
Sketching[19]
Skiing[125]
Skimboarding[126]
Skydiving[127]
Slacklining[128]
Slot car racing[180]
Snowboarding[125]
Soapmaking[53]
Speed skating[28]
Sports[54]
Squash[210]
Stamp collecting[146]
Stand-Up Comedy[55]
Stone collecting[147]
Sudoku[56]
Surfing[129]
Surfing[129]
Swimming[130]
Swimming[130]
Table football[181]
Table tennis[57]
Table tennis[57]
Taekwondo[131]
Tai chi[132]
Taxidermy[58]
Tennis[216]
Tinder [59]
Tour skating[109]
Trainspotting[230]
Traveling[72]
Triathlon[217]
Ultimate Frisbee [200]
Urban exploration[133]
Vehicle restoration[134]
Video game collecting[148]
Video Games[182]
Video gaming[60]
Videophilia[218]
Vintage cars[149]
Volleyball[183]
Volleyball[191]
Watching movies[61]
Water sports[135]
Web surfing[62]
Weightlifting[184]
Wood carving[63]
Woodworking[64]
Worldbuilding[65]
Writing[66]
Yo-yoing[68]
Yoga[67]
";
$res = preg_replace("/[^a-zA-Z0-9]/", "", $string);
echo "<pre>" . $res . "</pre>";
?>