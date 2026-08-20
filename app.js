let imageRefreshKey='';
const image = name => `assets/ribbons/${name}`;
const thumbnail = name => `assets/thumbnails/${name}.png${imageRefreshKey?`?v=${imageRefreshKey}`:''}`;
const ribbons = [
  {id:'cmc-vc',name:'军委副主席',category:'position',profile:'officer-command',kind:'岗位职务层级',rank:1,subtitle:'指挥管理军官',src:image('PLA_rank_ribbon_CMC_VC.svg')},
  {id:'cmc-member',name:'军委委员',category:'position',profile:'officer-command',kind:'岗位职务层级',rank:2,subtitle:'指挥管理军官',src:image('PLA_rank_ribbon_CMC_member.svg')},
  {id:'theatre',name:'战区级正职',category:'position',profile:'officer-command',kind:'岗位职务层级',rank:3,subtitle:'指挥管理军官',src:image('PLA_rank_ribbon_theatre_command.svg')},
  {id:'theatre-deputy',name:'战区级副职',category:'position',profile:'officer-command',kind:'岗位职务层级',rank:4,subtitle:'指挥管理军官',src:image('PLA_rank_ribbon_theatre_command_deputy.svg')},
  {id:'corps',name:'军级正职',category:'position',profile:'officer-command',kind:'岗位职务层级',rank:5,subtitle:'指挥管理军官',src:image('PLA_rank_ribbon_corps.svg')},
  {id:'corps-deputy',name:'军级副职',category:'position',profile:'officer-command',kind:'岗位职务层级',rank:6,subtitle:'指挥管理军官',src:image('PLA_rank_ribbon_corps_deputy.svg')},
  {id:'division',name:'师级正职',category:'position',profile:'officer-command',kind:'岗位职务层级',rank:7,subtitle:'指挥管理军官',src:image('PLA_rank_ribbon_division.svg')},
  {id:'division-deputy',name:'师级副职',category:'position',profile:'officer-command',kind:'岗位职务层级',rank:8,subtitle:'指挥管理军官',src:image('PLA_rank_ribbon_division_deputy.svg')},
  {id:'regiment',name:'团级正职',category:'position',profile:'officer-command',kind:'岗位职务层级',rank:9,subtitle:'指挥管理军官',src:image('PLA_rank_ribbon_regiment.svg')},
  {id:'regiment-deputy',name:'团级副职',category:'position',profile:'officer-command',kind:'岗位职务层级',rank:10,subtitle:'指挥管理军官',src:image('PLA_rank_ribbon_regiment_deputy.svg')},
  {id:'battalion',name:'营级正职',category:'position',profile:'officer-command',kind:'岗位职务层级',rank:11,subtitle:'指挥管理军官',src:image('PLA_rank_ribbon_battalion.svg')},
  {id:'battalion-deputy',name:'营级副职',category:'position',profile:'officer-command',kind:'岗位职务层级',rank:12,subtitle:'指挥管理军官',src:image('PLA_rank_ribbon_battalion_deputy.svg')},
  {id:'company',name:'连级正职',category:'position',profile:'officer-command',kind:'岗位职务层级',rank:13,subtitle:'指挥管理军官',src:image('PLA_rank_ribbon_company.svg')},
  {id:'company-deputy',name:'连级副职',category:'position',profile:'officer-command',kind:'岗位职务层级',rank:14,subtitle:'指挥管理军官',src:image('PLA_rank_ribbon_company_deputy.svg')},
  {id:'platoon',name:'排级',category:'position',profile:'officer-command',kind:'岗位职务层级',rank:15,subtitle:'指挥管理军官',src:image('PLA_rank_ribbon_platoon.svg')},
  {id:'tech-lv1',name:'正高级专业技术职务',category:'position',profile:'officer-tech',kind:'岗位职务层级',rank:16,subtitle:'专业技术军官',src:image('PLA_rank_ribbon_STO_lv1.svg')},
  {id:'tech-lv2',name:'副高级专业技术职务',category:'position',profile:'officer-tech',kind:'岗位职务层级',rank:17,subtitle:'专业技术军官',src:image('PLA_rank_ribbon_STO_lv2.svg')},
  {id:'tech-lv3',name:'中级专业技术职务',category:'position',profile:'officer-tech',kind:'岗位职务层级',rank:18,subtitle:'专业技术军官',src:image('PLA_rank_ribbon_STO_lv3.svg')},
  {id:'tech-lv4',name:'初级专业技术职务',category:'position',profile:'officer-tech',kind:'岗位职务层级',rank:19,subtitle:'专业技术军官',src:image('PLA_rank_ribbon_STO_lv4.svg')},
  {id:'nco-staff',name:'军士参谋',category:'position',profile:'nco',kind:'岗位职务层级',rank:20,subtitle:'军士岗位',src:image('PLA_rank_ribbon_staff_MSG.svg')},
  {id:'nco-section',name:'分队长',category:'position',profile:'nco',kind:'岗位职务层级',rank:21,subtitle:'军士岗位',src:image('PLA_rank_ribbon_section.svg')},
  {id:'nco-section-deputy',name:'副分队长',category:'position',profile:'nco',kind:'岗位职务层级',rank:22,subtitle:'军士岗位',src:image('PLA_rank_ribbon_section_deputy.svg')},
  {id:'nco-squad',name:'班长',category:'position',profile:'nco',kind:'岗位职务层级',rank:23,subtitle:'军士岗位',src:image('PLA_rank_ribbon_squad.svg')},
  {id:'nco-squad-deputy',name:'副班长',category:'position',profile:'nco',kind:'岗位职务层级',rank:24,subtitle:'军士岗位',src:image('PLA_rank_ribbon_squad_deputy.svg')},
  {id:'bayi',name:'八一勋章',category:'honour',kind:'功勋荣誉 · 勋章',rank:101,subtitle:'军队最高荣誉',src:image('PLA_honour_ribbon_order_of_bayi.svg')},
  {id:'red-banner',name:'红旗勋章',category:'honour',kind:'功勋荣誉 · 勋章',rank:102,subtitle:'战时荣誉',src:image('PLA_honour_ribbon_order_of_red_banner.svg')},
  {id:'red-star',name:'红星勋章',category:'honour',kind:'功勋荣誉 · 勋章',rank:103,subtitle:'战时荣誉',src:image('PLA_honour_ribbon_order_of_red_star.svg')},
  {id:'hero-special',name:'特级战斗英雄',category:'honour',kind:'功勋荣誉 · 荣誉称号',rank:111,subtitle:'个人战时荣誉',src:image('PLA_honour_ribbon_honorary_title_individual_wartime_lv1.svg')},
  {id:'hero-first',name:'一级战斗英雄',category:'honour',kind:'功勋荣誉 · 荣誉称号',rank:112,subtitle:'个人战时荣誉',src:image('PLA_honour_ribbon_honorary_title_individual_wartime_lv2.svg')},
  {id:'hero-second',name:'二级战斗英雄',category:'honour',kind:'功勋荣誉 · 荣誉称号',rank:113,subtitle:'个人战时荣誉',src:image('PLA_honour_ribbon_honorary_title_individual_wartime_lv3.svg')},
  {id:'wartime-first',name:'一等战功',category:'honour',kind:'功勋荣誉 · 奖章',rank:121,subtitle:'个人战时奖励',src:image('PLA_honour_ribbon_meritorious_service_medal_individual_wartime_lv1.svg')},
  {id:'wartime-second',name:'二等战功',category:'honour',kind:'功勋荣誉 · 奖章',rank:122,subtitle:'个人战时奖励',src:image('PLA_honour_ribbon_meritorious_service_medal_individual_wartime_lv2.svg')},
  {id:'wartime-third',name:'三等战功',category:'honour',kind:'功勋荣誉 · 奖章',rank:123,subtitle:'个人战时奖励',src:image('PLA_honour_ribbon_meritorious_service_medal_individual_wartime_lv3.svg')},
  {id:'peacetime-first',name:'一等功',category:'honour',kind:'功勋荣誉 · 奖章',rank:131,subtitle:'个人平时奖励',src:image('PLA_honour_ribbon_meritorious_service_medal_individual_peacetime_lv1.svg')},
  {id:'combat-mission',name:'执行作战任务纪念章',category:'service',kind:'服役经历',rank:301,subtitle:'作战纪念章',src:image('PLA_service_ribbon_combat_mission.svg')},
  {id:'bravery',name:'英勇纪念章',category:'honour',kind:'功勋荣誉表彰 · 纪念章',rank:270,subtitle:'个人战时纪念',src:image('PLA_service_ribbon_bravery.svg')},
  {id:'overseas-1',name:'一级海外服役纪念章',category:'service',kind:'服役经历',rank:304,subtitle:'海外服役经历',src:image('PLA_service_ribbon_overseas_deployment_lv1.svg')},
  {id:'overseas-2',name:'二级海外服役纪念章',category:'service',kind:'服役经历',rank:305,subtitle:'海外服役经历',src:image('PLA_service_ribbon_overseas_deployment_lv2.svg')},
  {id:'overseas-3',name:'三级海外服役纪念章',category:'service',kind:'服役经历',rank:306,subtitle:'海外服役经历',src:image('PLA_service_ribbon_overseas_deployment_lv3.svg')},
  {id:'frontier-1',name:'一级卫国戍边纪念章',category:'service',kind:'服役经历',rank:307,subtitle:'戍边服役经历',src:image('PLA_service_ribbon_medal_of_defending_the_frontiers_lv1.svg')},
  {id:'frontier-2',name:'二级卫国戍边纪念章',category:'service',kind:'服役经历',rank:308,subtitle:'戍边服役经历',src:image('PLA_service_ribbon_medal_of_defending_the_frontiers_lv2.svg')},
  {id:'frontier-3',name:'三级卫国戍边纪念章',category:'service',kind:'服役经历',rank:309,subtitle:'戍边服役经历',src:image('PLA_service_ribbon_medal_of_defending_the_frontiers_lv3.svg')},
  {id:'devotion',name:'献身国防纪念章',category:'honour',kind:'功勋荣誉表彰 · 纪念章',rank:271,subtitle:'献身国防纪念',src:image('PLA_service_ribbon_devotion_for_national_defense.svg')},
  {id:'year-1',name:'一年军龄略章',category:'term',kind:'服役年限',rank:401,subtitle:'军龄',src:image('PLA_service_ribbon_1yr.svg')},
  {id:'year-2',name:'二年军龄略章',category:'term',kind:'服役年限',rank:402,subtitle:'军龄',src:image('PLA_service_ribbon_2yrs.svg')},
  {id:'year-3',name:'三年军龄略章',category:'term',kind:'服役年限',rank:403,subtitle:'军龄',src:image('PLA_service_ribbon_3yrs.svg')},
  {id:'year-4',name:'四年军龄略章',category:'term',kind:'服役年限',rank:404,subtitle:'军龄',src:image('PLA_service_ribbon_4yrs.svg')},
  {id:'year-5',name:'五年军龄略章',category:'term',kind:'服役年限',rank:405,subtitle:'军龄',src:image('PLA_service_ribbon_5yrs.svg')},
  {id:'year-10',name:'十年军龄略章',category:'term',kind:'服役年限',rank:410,subtitle:'军龄',src:image('PLA_service_ribbon_10yrs.svg')},
  {id:'year-20',name:'二十年军龄略章',category:'term',kind:'服役年限',rank:420,subtitle:'军龄',src:image('PLA_service_ribbon_20yrs.svg')},
  {id:'year-30',name:'三十年军龄略章',category:'term',kind:'服役年限',rank:430,subtitle:'军龄',src:image('PLA_service_ribbon_30yrs.svg')},
  {id:'year-40',name:'四十年军龄略章',category:'term',kind:'服役年限',rank:440,subtitle:'军龄',src:image('PLA_service_ribbon_40yrs.svg')},
  {id:'year-50',name:'五十年军龄略章',category:'term',kind:'服役年限',rank:450,subtitle:'军龄',src:image('PLA_service_ribbon_50yrs.svg')}
];
// 23 式略章完整素材清单：同一项目的不同情形/等级均可单独选择。
// 已在上方列出的项目会被跳过，避免与基础演示项重复。
const addRibbon=(id,name,category,rank,subtitle,file,profile)=>{
  if(ribbons.some(r=>r.src.endsWith(`/${file}`))) return;
  ribbons.push({id,name,category,profile,kind:category==='honour'?'功勋荣誉表彰':category==='service'?'服役经历':category==='term'?'服役年限':'岗位职务层级',rank,subtitle,src:image(file)});
};
const addLevels=(prefix,names,category,rank,subtitle,fileFor,profile)=>names.forEach((name,i)=>addRibbon(`${prefix}-${i+1}`,name,category,rank+i,subtitle,fileFor(i+1),profile));

// 功勋荣誉表彰：个人项目在前、集体项目在后；战时、平时、重大非战争行动依次排序。
addLevels('wartime-unit-title',['特级英模单位','一级英模单位','二级英模单位'],'honour',114,'集体战时荣誉',n=>`PLA_honour_ribbon_honorary_title_unit_wartime_lv${n}.svg`);
addLevels('peacetime-personal-title',['个人一级平时荣誉称号','个人二级平时荣誉称号'],'honour',120,'个人平时荣誉',n=>`PLA_honour_ribbon_honorary_title_individual_peacetime_lv${n}.svg`);
addRibbon('peacetime-unit-title','集体平时荣誉称号','honour',123,'集体平时荣誉','PLA_honour_ribbon_honorary_title_unit_peacetime.svg');
addRibbon('mo-personal-title','个人重大非战争军事行动荣誉称号','honour',124,'个人重大非战争军事行动荣誉','PLA_honour_ribbon_honorary_title_individual_vital_MOOTW.svg');
addRibbon('mo-unit-title','集体重大非战争军事行动荣誉称号','honour',125,'集体重大非战争军事行动荣誉','PLA_honour_ribbon_honorary_title_unit_vital_MOOTW.svg');

const wartimeTypes=['不区分情形','指挥作战','参加战斗','支援保障'];
for(let level=1;level<=4;level++) wartimeTypes.forEach((type,i)=>addRibbon(`wartime-personal-${level}-${i}`,`${type}个人${['一','二','三','四'][level-1]}等战功`,'honour',140+(level-1)*10+i,'个人战时奖励',`PLA_honour_ribbon_meritorious_service_medal_individual_wartime_lv${level}${i?`_cat${i}`:''}.svg`));
addLevels('wartime-unit-medal',['集体一等战功','集体二等战功','集体三等战功','集体四等战功'],'honour',185,'集体战时奖励',n=>`PLA_honour_ribbon_meritorious_service_medal_unit_wartime_lv${n}.svg`);

const peacetimeTypes=['不区分情形','战备训练','教育管理','国防科技','服务保障'];
for(let level=1;level<=3;level++) peacetimeTypes.forEach((type,i)=>addRibbon(`peacetime-personal-${level}-${i}`,`${type}个人${['一','二','三'][level-1]}等功`,'honour',200+(level-1)*10+i,'个人平时奖励',`PLA_honour_ribbon_meritorious_service_medal_individual_peacetime_lv${level}${i?`_cat${i}`:''}.svg`));
addLevels('peacetime-unit-medal',['集体一等功','集体二等功','集体三等功'],'honour',235,'集体平时奖励',n=>`PLA_honour_ribbon_meritorious_service_medal_unit_peacetime_lv${n}.svg`);
addLevels('mo-personal-medal',['个人重大非战争军事行动一等功','个人重大非战争军事行动二等功','个人重大非战争军事行动三等功'],'honour',240,'个人重大非战争军事行动奖励',n=>`PLA_honour_ribbon_meritorious_service_medal_individual_vital_MOOTW_lv${n}.svg`);
addLevels('mo-unit-medal',['集体重大非战争军事行动一等功','集体重大非战争军事行动二等功','集体重大非战争军事行动三等功'],'honour',245,'集体重大非战争军事行动奖励',n=>`PLA_honour_ribbon_meritorious_service_medal_unit_vital_MOOTW_lv${n}.svg`);
peacetimeTypes.forEach((type,i)=>addRibbon(`peacetime-individual-commend-${i}`,`${type}个人嘉奖`,'honour',250+i,'个人平时奖励',`PLA_honour_ribbon_reward_for_individual_peacetime${i?`_cat${i}`:''}.svg`));
addRibbon('mo-individual-commend','个人重大非战争军事行动嘉奖','honour',256,'个人重大非战争军事行动奖励','PLA_honour_ribbon_reward_for_individual_vital_MOOTW.svg');
addRibbon('peacetime-unit-commend','集体平时嘉奖','honour',257,'集体平时奖励','PLA_honour_ribbon_reward_for_unit_peacetime.svg');
addRibbon('mo-unit-commend','集体重大非战争军事行动嘉奖','honour',258,'集体重大非战争军事行动奖励','PLA_honour_ribbon_reward_for_unit_vital_MOOTW.svg');
addLevels('personal-commend',['个人一级表彰','个人二级表彰','个人三级表彰'],'honour',260,'个人表彰',n=>`PLA_honour_ribbon_commendation_for_individual_lv${n}.svg`);
addLevels('unit-commend',['集体一级表彰','集体二级表彰','集体三级表彰'],'honour',264,'集体表彰',n=>`PLA_honour_ribbon_commendation_for_unit_lv${n}.svg`);
addLevels('excellent-junior',['优秀基层官兵一级','优秀基层官兵二级','优秀基层官兵三级'],'honour',268,'优秀基层官兵荣誉',n=>`PLA_honour_ribbon_excellent_junior_officer_or_enlisted_lv${n}.svg`);
['陆军先锋','海军深蓝勇士','空军空天铁拳','火箭军砺剑尖兵','战略支援尖兵','联勤保障尖兵','武警忠诚卫士'].forEach((name,group)=>addLevels(`service-honour-${group}`,[`${name}一级`,`${name}二级`,`${name}三级`],'honour',280+group*3,`${name}荣誉`,n=>`${['GF','Navy','AF','RF','SSF','JLSF','PAP'][group]}_honour_ribbon_lv${n}.svg`));

// 服役经历：按《规定》第八条项目顺序建档。
addRibbon('combat-mission-reverse','作战纪念章（背面示例）','service',301,'作战纪念章背面带战役名称及日期','PLA_service_ribbon_combat_mission_back.svg');
addRibbon('major-nonwar','重大非战争军事行动经历','service',302,'重大非战争军事行动','PLA_service_ribbon_vital_MOOTW.svg');
addRibbon('special-mission','重大专项任务经历','service',303,'重大专项任务','PLA_service_ribbon_vital_special_mission.svg');
addLevels('unit-command-theatre',['正战区级单位主官','副战区级单位主官'],'service',310,'单位主官任职经历',n=>`PLA_service_ribbon_theatre_command_lv${n}.svg`);
addLevels('unit-command-corps',['正军级单位主官','副军级单位主官'],'service',312,'单位主官任职经历',n=>`PLA_service_ribbon_corps_lv${n}.svg`);
addLevels('unit-command-division',['正师级单位主官','副师级单位主官'],'service',314,'单位主官任职经历',n=>`PLA_service_ribbon_division_lv${n}.svg`);
addLevels('unit-command-regiment',['正团级单位主官','副团级单位主官'],'service',316,'单位主官任职经历',n=>`PLA_service_ribbon_regiment_lv${n}.svg`);
addLevels('unit-command-battalion',['正营级单位主官','副营级单位主官'],'service',318,'单位主官任职经历',n=>`PLA_service_ribbon_battalion_lv${n}.svg`);
addRibbon('unit-command-company','正连级单位主官','service',320,'单位主官任职经历','PLA_service_ribbon_company.svg');
[['中央军委机关','PLA_service_ribbon_organ_of_CMC.svg'],['军委机关部门主要领导','PLA_service_ribbon_organ_of_CMC_director.svg'],['军委机关局级内设机构主要领导','PLA_service_ribbon_organ_of_CMC_bureau_director.svg'],['军委机关处级内设机构主要领导','PLA_service_ribbon_organ_of_CMC_division_director.svg'],['正战区级机关','PLA_service_ribbon_organ_of_TCC.svg'],['正战区级机关主要领导','PLA_service_ribbon_organ_of_TCC_director.svg'],['正战区级机关内设机构主要领导','PLA_service_ribbon_organ_of_TCC_division_director.svg'],['副战区级机关','PLA_service_ribbon_organ_of_DBR.svg'],['副战区级机关主要领导','PLA_service_ribbon_organ_of_DBR_director.svg'],['军级机关','PLA_service_ribbon_organ_of_corps.svg'],['军级机关主要领导','PLA_service_ribbon_organ_of_corps_director.svg'],['军级机关内设机构主要领导','PLA_service_ribbon_organ_of_corps_division_director.svg'],['师旅团级机关','PLA_service_ribbon_organ_of_theatre_command.svg'],['师旅团级机关主要领导','PLA_service_ribbon_organ_of_theatre_command_director.svg'],['师旅团级机关局级内设机构主要领导','PLA_service_ribbon_organ_of_theatre_command_bureau_director.svg'],['师旅团级机关处级内设机构主要领导','PLA_service_ribbon_organ_of_theatre_command_division_director.svg']].forEach(([name,file],i)=>addRibbon(`organ-${i}`,name,'service',330+i,'机关任职经历',file));
addLevels('joint-position',['高级联合岗位','中级联合岗位','初级联合岗位'],'service',350,'联合岗位任职经历',n=>`PLA_service_ribbon_joint_position_lv${n}.svg`);
[['陆军','PLA_service_ribbon_ground_force.svg'],['海军','PLA_service_ribbon_navy.svg'],['空军','PLA_service_ribbon_air_force.svg'],['火箭军','PLA_service_ribbon_rocket_force.svg'],['战略支援部队','PLA_service_ribbon_strategic_support_force.svg'],['联勤保障部队','PLA_service_ribbon_joint_logistics_support_force.svg'],['武警部队','PLA_service_ribbon_armed_police.svg'],['国防动员单位','PLA_service_ribbon_national_defense_mobilization.svg']].forEach(([name,file],i)=>addRibbon(`force-${i}`,`${name}任职经历`,'service',355+i,'军兵种和武警部队任职经历',file));
addRibbon('instructor','专职教官（教员）','service',364,'军队院校教官任职经历','PLA_service_ribbon_instructor.svg');
addRibbon('instructor-part','兼职教官（教员）','service',365,'军队院校教官任职经历','PLA_service_ribbon_instructor_part-time.svg');
addLevels('tech-role-experience',['正高职专业技术岗位','副高职专业技术岗位','中职专业技术岗位','初职专业技术岗位'],'service',370,'专业技术岗位任职经历',n=>`PLA_service_ribbon_STO_lv${n}.svg`);
addLevels('command-training',['高级指挥教育培训','中级指挥教育培训','初级指挥教育培训'],'service',375,'军事教育培训经历',n=>`PLA_service_ribbon_education_and_training_in_command_lv${n}.svg`,'officer-command');
addLevels('tech-training',['高级专业技术军官培训','中级专业技术军官培训','初级专业技术军官培训'],'service',378,'军事教育培训经历',n=>`PLA_service_ribbon_STO_training_lv${n}.svg`,'officer-tech');
addLevels('nco-training',['高级军士晋升培训','中级军士晋升培训','初级军士晋升培训'],'service',381,'军事教育培训经历',n=>`PLA_service_ribbon_promotion_training_for_sergeant_lv${n}.svg`,'nco');
addRibbon('overseas-education','出国（境）教育培训经历','service',385,'出国（境）教育培训经历','PLA_service_ribbon_overseas_education.svg');

// 补足军龄略章的 6 至 9 年项目。
addLevels('year-short',['六年军龄略章','七年军龄略章','八年军龄略章','九年军龄略章'],'term',406,'军龄',n=>`PLA_service_ribbon_${n+5}yrs.svg`);
const repeatable=id=>/^(mo-(personal|unit)-medal|peacetime-personal-\d+-|peacetime-individual-commend|mo-individual-commend|peacetime-unit-commend|mo-unit-commend|personal-commend|unit-commend|excellent-junior|peacetime-unit-title|mo-unit-title|major-nonwar|special-mission|overseas-education)/.test(id);
const awardLimit=id=>/commend/.test(id)?20:10;
ribbons.forEach(r=>{r.repeatable=repeatable(r.id);r.maxAwards=awardLimit(r.id)});
const STORAGE_KEY='pla-ribbon-simulator-state-v2';
let selected=[], filter='all', query='', profile='officer-command', force='army', dragId=null, selectionSequence=0, repeatInputTimer=null, nameZh='姓名', namePinyin='XING MING';
const forceThemes={army:{label:'陆军',background:'#3f5545'},navy:{label:'海军',background:'#f4f5f2'},airforce:{label:'空军',background:'#26394e'},rocket:{label:'火箭军',background:'#a99970'},pap:{label:'武警部队',background:'#4e5735'}};
const $=s=>document.querySelector(s), list=$('#catalogList'), rack=$('#ribbonRack'), selectedList=$('#selectedList');
const termOrder={十:1,二十:2,三十:3,四十:4,五十:5,一:11,二:12,三:13,四:14,五:15,六:16,七:17,八:18,九:19};
const orderValue=r=>r.category==='term'?400+(termOrder[r.name.replace('年军龄略章','')]||99):r.rank;
const ordered=(items=selected)=>[...items].sort((a,b)=>orderValue(a)-orderValue(b));
const layoutSpacer=(key,gridSpan=2)=>({id:`layout-spacer-${key}`,layoutSpacer:true,gridSpan});
const centerFirstRow=items=>{const count=items.length%3;if(!count)return items;const first=items.slice(0,count),rest=items.slice(count);return count===1?[layoutSpacer('first-left'),first[0],layoutSpacer('first-right'),...rest]:[layoutSpacer('first-left',1),...first,layoutSpacer('first-right',1),...rest]};
const putPositionInTopMiddle=items=>{const position=items.find(r=>r.category==='position');if(!position)return centerFirstRow(items);const rest=items.filter(r=>r.id!==position.id),count=items.length%3;if(count===1)return [layoutSpacer('position-left'),position,layoutSpacer('position-right'),...rest];if(count===2)return [layoutSpacer('position-left',1),position,rest[0],layoutSpacer('position-right',1),...rest.slice(1)];return [rest[0],position,rest[1],...rest.slice(2)]};
const wearable=()=>{const sorted=ordered(),priority=sorted.filter(r=>r.category==='position'||r.category==='term'),others=sorted.filter(r=>r.category!=='position'&&r.category!=='term'),limited=sorted.length<=21?sorted:ordered([...priority,...others].slice(0,21));return putPositionInTopMiddle(limited)};
const multiWearable=r=>/^(wartime-unit-(title|medal)|combat-mission(?:-reverse)?)$/.test(r.id);
const simultaneousLevels=r=>/^mo-(personal|unit)-medal-\d+$/.test(r.id);
const makeSelected=(r,extra={})=>({...r,selectionId:extra.selectionId||`${r.id}-${Date.now()}-${++selectionSequence}`,awards:1,markerX:0,markerY:0,...extra});
const multiCount=item=>selected.filter(r=>r.id===item.id).length;
const setMultiCount=(item,count)=>{const current=multiCount(item),next=Math.max(0,Math.min(21,Number.isFinite(count)?Math.floor(count):current));if(next===current)return;selected=selected.filter(r=>r.id!==item.id);selected.push(...Array.from({length:next},()=>makeSelected(item)))};
const exclusiveGroup=r=>{
  if(/^peacetime-individual-commend-/.test(r.id))return 'peacetime-individual-commend';
  if(/^personal-commend-/.test(r.id))return 'personal-commend';
  if(/^unit-commend-/.test(r.id))return 'unit-commend';
  if(/^excellent-junior-/.test(r.id))return 'excellent-junior';
  if(/^overseas-[123]$/.test(r.id))return 'overseas-memorial';
  if(/^frontier-[123]$/.test(r.id))return 'frontier-memorial';
  if(/^tech-role-experience-/.test(r.id))return 'technical-role-experience';
  return '';
};
const selectRibbon=item=>{
  if(multiWearable(item)){selected=[...selected,makeSelected(item)];return}
  if(selected.some(r=>r.id===item.id)){selected=selected.filter(r=>r.id!==item.id);return}
  if(item.category==='position'){selected=[...selected.filter(r=>r.category!=='position'),makeSelected(item)];return}
  const group=exclusiveGroup(item),same=group?selected.filter(r=>exclusiveGroup(r)===group):[];
  if(group!=='peacetime-individual-commend'&&same.some(r=>r.rank<item.rank))return;
  if(group)selected=selected.filter(r=>exclusiveGroup(r)!==group);
  selected=[...selected,makeSelected(item)];
};
const ribbonEl=(r,number='',useThumbnail=false)=>r.layoutSpacer?'<span class="layout-spacer" aria-hidden="true"></span>':`<button class="ribbon-with-awards ribbon-preview-trigger ${r.category==='position'?'position-ribbon':''}" type="button" data-preview="${r.id}" title="查看${r.name}大图"><span class="ribbon" ${number?`data-number="${number}"`:''}><img src="${useThumbnail?thumbnail(r.src.split('/').pop()):r.src}" alt="${r.name}勋表" loading="eager" decoding="async" onerror="if(!this.dataset.retry){this.dataset.retry='1';this.src=this.src+(this.src.includes('?')?'&':'?')+'retry=1'}"/>${r.repeatable&&r.awards>1?`<b class="award-marker" data-marker-for="${r.id}" style="--marker-x:0px;--marker-y:0px" aria-label="获得${r.awards}次">${r.awards}</b>`:''}</span></button>`;
const awardOptions=r=>Array.from({length:r.maxAwards},(_,i)=>`<option value="${i+1}" ${r.awards===i+1?'selected':''}>${i+1}</option>`).join('');
function saveState(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify({selected:selected.map(({id,selectionId,awards,markerX,markerY})=>({id,selectionId,awards,markerX,markerY})),filter,profile,force,nameZh,namePinyin,enlistYear:$('#enlistYear')?.value||''}));}catch(_) {}}
function restoreState(){try{const saved=JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}');filter=saved.filter||filter;profile=saved.profile||profile;force=forceThemes[saved.force]?saved.force:force;nameZh=(saved.nameZh||nameZh).trim().slice(0,6)||'姓名';namePinyin=(saved.namePinyin||namePinyin).trim().toUpperCase().slice(0,24)||'XING MING';selected=(saved.selected||[]).map(item=>{const source=ribbons.find(r=>r.id===item.id);return source?makeSelected(source,item):null}).filter(Boolean).filter(r=>!r.profile||r.profile===profile);return saved.enlistYear||''}catch(_){return ''}}
function renderCatalog(){const catalogTop=list.scrollTop,visible=ribbons.filter(r=>(filter==='all'||r.category===filter)&&(!r.profile||r.profile===profile)&&r.name.includes(query)),positionLocked=selected.some(x=>x.category==='position');list.innerHTML=visible.map(r=>{const isSelected=selected.some(x=>x.id===r.id),canRepeat=multiWearable(r),count=multiCount(r),positionDisabled=r.category==='position'&&positionLocked&&!isSelected,termDisabled=r.category==='term',locked=positionDisabled||termDisabled,wearNote=canRepeat?' · 可多枚佩戴':simultaneousLevels(r)?' · 不同等级可同时佩戴':r.id==='major-nonwar'?' · 数字配件标次数':r.repeatable?' · 可标次数':'',multiControl=!canRepeat?`<button class="add-button ${isSelected?'selected':''}" data-add="${r.id}" ${locked?'disabled':''} aria-label="${isSelected?'移除':'添加'}${r.name}">${isSelected?'−':'+'}</button>`:count?`<div class="multi-add-control" aria-label="${r.name}佩戴数量"><button type="button" data-repeat-decrement="${r.id}" aria-label="减少一枚">−</button><input type="number" min="0" max="21" inputmode="numeric" value="${count}" data-repeat-count="${r.id}" aria-label="${r.name}佩戴数量"/><button type="button" data-repeat-increment="${r.id}" aria-label="增加一枚">+</button></div>`:`<button class="add-button" data-add="${r.id}" ${locked?'disabled':''} aria-label="添加${r.name}">+</button>`;return `<div class="catalog-item ${locked?'position-locked':''}">${ribbonEl(selected.find(x=>x.id===r.id)||r,'',true)}<div class="catalog-copy"><strong>${r.name}</strong><span>${r.kind} · ${termDisabled?'由入伍年份自动生成':`${r.subtitle}${wearNote}`}</span></div>${multiControl}</div>`}).join('')||'<p class="empty-selected">当前身份下没有可选项目</p>';list.scrollTop=catalogTop}
function render(){const correct=ordered(),ok=selected.every((r,i)=>r.selectionId===correct[i]?.selectionId),shown=wearable(),maximum=21,overflow=selected.length>maximum,rows=Math.max(1,Math.ceil(shown.reduce((sum,r)=>sum+(r.gridSpan||2),0)/6)),canvas=$('.uniform-canvas');canvas.dataset.force=force;$('#uniformLabel').textContent=`${forceThemes[force].label}礼服左胸 · 勋表佩戴区`;$('#namePlateZh').textContent=nameZh;$('#namePlatePinyin').textContent=namePinyin;$('#chosenCount').textContent=overflow?`${selected.length} 项已选 · 展示 ${maximum} 项`:`${selected.length} 项已选`;$('#rowInfo').textContent=`${rows} / 7 行`;canvas.style.setProperty('--rack-rows',rows);rack.innerHTML=shown.map((r,i)=>`<span class="rack-item" style="grid-column:span ${r.gridSpan||2}">${ribbonEl(r,String(i+1).padStart(2,'0'),true)}</span>`).join('');$('#ribbonAssembly').style.display=shown.length?'block':'none';$('#canvasEmpty').style.display=shown.length?'none':'block';selectedList.innerHTML=selected.length?selected.map((r,i)=>`<div class="selected-row" draggable="true" data-id="${r.selectionId}"><span class="rank">${String(i+1).padStart(2,'0')}</span><span class="drag">⋮⋮</span>${ribbonEl(r,'',true)}<div><strong>${r.name}</strong><small>${r.kind} · ${r.subtitle}</small>${r.repeatable?`<label class="award-control">获得次数 <select data-awards="${r.selectionId}" aria-label="${r.name}获得次数">${awardOptions(r)}</select> 次</label>`:''}</div><button class="move" data-up="${r.selectionId}" title="前移">↑</button><button class="delete" data-remove="${r.selectionId}" title="移除" ${r.category==='term'?'disabled':''}>×</button></div>`).join(''):'<p class="empty-selected">尚未选择勋表</p>';const status=$('#ruleStatus');if(!selected.length){status.innerHTML='<span class="status-icon">✓</span><div><strong>等待选择勋表</strong><p>添加项目后将自动核验</p></div>';status.style.background='#ecf5ef'}else if(overflow){status.innerHTML='<span class="status-icon">!</span><div><strong>超过可佩戴上限</strong><p>预览已按七排上限保留优先项目</p></div>';status.style.background='#fff1ef'}else{status.innerHTML=ok?'<span class="status-icon">✓</span><div><strong>排列符合 23 式规则</strong><p>类别、战时优先与等级顺序均已核验</p></div>':'<span class="status-icon">!</span><div><strong>当前列表顺序已调整</strong><p>佩戴预览始终按规则自动排列</p></div>';status.style.background=ok?'#ecf5ef':'#fff1ef'}renderCatalog();saveState()}
function autoArrange(){selected=ordered();render()}
list.addEventListener('click',e=>{const id=e.target.dataset.add||e.target.dataset.repeatIncrement||e.target.dataset.repeatDecrement;if(!id)return;const item=ribbons.find(r=>r.id===id);if(!item||item.category==='term')return;if(e.target.dataset.repeatIncrement)setMultiCount(item,multiCount(item)+1);else if(e.target.dataset.repeatDecrement)setMultiCount(item,multiCount(item)-1);else selectRibbon(item);autoArrange()});
list.addEventListener('change',e=>{const id=e.target.dataset.repeatCount;if(!id)return;const item=ribbons.find(r=>r.id===id);if(!item)return;setMultiCount(item,Number(e.target.value));autoArrange()});
list.addEventListener('input',e=>{const id=e.target.dataset.repeatCount;if(!id)return;clearTimeout(repeatInputTimer);repeatInputTimer=setTimeout(()=>{const item=ribbons.find(r=>r.id===id);if(!item)return;setMultiCount(item,Number(e.target.value));autoArrange()},350)});
selectedList.addEventListener('click',e=>{const id=e.target.dataset.remove||e.target.dataset.up;if(!id)return;if(e.target.dataset.remove)selected=selected.filter(r=>r.selectionId!==id);else{const i=selected.findIndex(r=>r.selectionId===id);if(i>0)[selected[i-1],selected[i]]=[selected[i],selected[i-1]]}render()});
selectedList.addEventListener('change',e=>{const id=e.target.dataset.awards;if(!id)return;selected=selected.map(r=>r.selectionId===id?{...r,awards:Number(e.target.value)}:r);render()});
$('#categoryTabs').addEventListener('click',e=>{if(!e.target.dataset.category)return;filter=e.target.dataset.category;document.querySelectorAll('#categoryTabs button').forEach(b=>b.classList.toggle('active',b===e.target));renderCatalog()});
$('#identityControls').addEventListener('click',e=>{if(!e.target.dataset.profile)return;profile=e.target.dataset.profile;selected=selected.filter(r=>!r.profile||r.profile===profile);document.querySelectorAll('#identityControls button').forEach(b=>b.classList.toggle('active',b===e.target));autoArrange()});
$('#forceControls').addEventListener('click',e=>{if(!e.target.dataset.force)return;force=e.target.dataset.force;document.querySelectorAll('#forceControls button').forEach(b=>b.classList.toggle('active',b===e.target));render()});
const enlistYear=$('#enlistYear'),currentYear=new Date().getFullYear();
for(let year=currentYear;year>=1950;year--) enlistYear.insertAdjacentHTML('beforeend',`<option value="${year}">${year} 年</option>`);
const savedEnlistYear=restoreState(); if(savedEnlistYear) enlistYear.value=savedEnlistYear;
const nameInput=$('#nameInput'),pinyinInput=$('#pinyinInput');
nameInput.value=nameZh;pinyinInput.value=namePinyin;
nameInput.addEventListener('input',e=>{nameZh=e.target.value.trim().slice(0,6)||'姓名';render()});
pinyinInput.addEventListener('input',e=>{namePinyin=e.target.value.trim().toUpperCase().slice(0,24)||'XING MING';e.target.value=namePinyin;render()});
document.querySelectorAll('#identityControls button').forEach(button=>button.classList.toggle('active',button.dataset.profile===profile));
document.querySelectorAll('#forceControls button').forEach(button=>button.classList.toggle('active',button.dataset.force===force));
document.querySelectorAll('#categoryTabs button').forEach(button=>button.classList.toggle('active',button.dataset.category===filter));
const termForYears=years=>{if(years<1)return[];if(years<=10)return[years];const base=Math.floor(years/10)*10;if(years%10===0)return[base];return[base,years%10]};
const termLabel={1:'一',2:'二',3:'三',4:'四',5:'五',6:'六',7:'七',8:'八',9:'九',10:'十',20:'二十',30:'三十',40:'四十',50:'五十'};
enlistYear.addEventListener('change',e=>{const year=Number(e.target.value);if(!year){autoArrange();return}const years=currentYear-year,terms=termForYears(years),termItems=terms.map(value=>ribbons.find(r=>r.category==='term'&&r.name===`${termLabel[value]}年军龄略章`)).filter(Boolean);selected=[...selected.filter(r=>r.category!=='term'),...termItems.map(r=>makeSelected(r))];autoArrange()});
const clearAll=()=>{selected=[];enlistYear.value='';render()};
const refreshRibbonImages=()=>{imageRefreshKey=Date.now();render()};
$('#searchInput').addEventListener('input',e=>{query=e.target.value.trim();renderCatalog()});$('#resetButton').addEventListener('click',clearAll);$('#clearAll').addEventListener('click',clearAll);$('#refreshRibbons').addEventListener('click',refreshRibbonImages);
selectedList.addEventListener('dragstart',e=>{dragId=e.target.closest('[data-id]')?.dataset.id});selectedList.addEventListener('dragover',e=>e.preventDefault());selectedList.addEventListener('drop',e=>{e.preventDefault();const target=e.target.closest('[data-id]')?.dataset.id;if(!dragId||!target||dragId===target)return;const from=selected.findIndex(r=>r.selectionId===dragId),to=selected.findIndex(r=>r.selectionId===target),[item]=selected.splice(from,1);selected.splice(to,0,item);render()});
const viewer=$('#ribbonViewer'),viewerImage=$('#viewerImage');
document.addEventListener('click',e=>{const trigger=e.target.closest('[data-preview]');if(!trigger)return;const item=selected.find(r=>r.id===trigger.dataset.preview)||ribbons.find(r=>r.id===trigger.dataset.preview);if(!item)return;$('#viewerTitle').textContent=item.name;viewerImage.onerror=()=>{viewerImage.onerror=null;viewerImage.src=thumbnail(item.src.split('/').pop());$('#viewerMeta').textContent=`${item.kind} · ${item.subtitle}（原图加载失败，已显示轻量图）`};viewerImage.src=item.src;viewerImage.alt=`${item.name}勋表大图`;$('#viewerMeta').textContent=`${item.kind} · ${item.subtitle}`;viewer.showModal()});
$('#closeViewer').addEventListener('click',()=>viewer.close());viewer.addEventListener('click',e=>{if(e.target===viewer)viewer.close()});
const isMobileSafari=()=>/iP(ad|hone|od)/.test(navigator.userAgent)||(/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints>1);
const waitForImage=img=>img.complete?Promise.resolve():new Promise(resolve=>{img.addEventListener('load',resolve,{once:true});img.addEventListener('error',resolve,{once:true});setTimeout(resolve,5000)});
const rectIn=(rect,bounds)=>({x:rect.left-bounds.left,y:rect.top-bounds.top,width:rect.width,height:rect.height});
const loadExportImage=src=>new Promise(resolve=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=()=>resolve(null);img.src=src});
const detailRows=()=>new Set([...rack.querySelectorAll('.ribbon img')].map(img=>Math.round(img.getBoundingClientRect().top))).size;
const detailHeight=()=>44+detailRows()*58;
const shortLabel=(value,max=12)=>value.length>max?`${value.slice(0,max-1)}…`:value;
function drawRackDetails(ctx,bounds,entries){const top=bounds.height,rowKeys=[...new Set(entries.map(entry=>Math.round(entry.rect.y)))].sort((a,b)=>a-b),rowByY=new Map(rowKeys.map((key,index)=>[key,index]));ctx.fillStyle='#fff';ctx.fillRect(0,top,bounds.width,detailHeight());ctx.fillStyle='#0c2038';ctx.font='700 13px sans-serif';ctx.fillText('略章说明（与上方位置对应）',14,top+22);entries.forEach(({item,rect})=>{const row=rowByY.get(Math.round(rect.y)),x=rect.x,y=top+34+row*58,w=rect.width;ctx.strokeStyle='#dbe2e5';ctx.lineWidth=1;ctx.strokeRect(x,y,w,50);ctx.fillStyle='#0c2038';ctx.font='700 9px sans-serif';ctx.fillText(shortLabel(item.name,Math.max(7,Math.floor(w/9))),x+5,y+19);ctx.fillStyle='#627182';ctx.font='8px sans-serif';ctx.fillText(shortLabel(item.subtitle,Math.max(9,Math.floor(w/7))),x+5,y+35)})}
function drawNamePlateExport(ctx,bounds){const plate=rectIn($('#namePlate').getBoundingClientRect(),bounds);ctx.fillStyle='#172d49';ctx.fillRect(plate.x,plate.y,plate.width,plate.height);ctx.strokeStyle='#e2e6e7';ctx.lineWidth=2;ctx.strokeRect(plate.x+1,plate.y+1,plate.width-2,plate.height-2);ctx.fillStyle='#fff';ctx.textAlign='center';ctx.textBaseline='middle';ctx.font=`${Math.max(13,plate.height*.37)}px serif`;ctx.fillText(nameZh,plate.x+plate.width/2,plate.y+plate.height*.38);ctx.font=`700 ${Math.max(8,plate.height*.19)}px sans-serif`;ctx.fillText(namePinyin,plate.x+plate.width/2,plate.y+plate.height*.73);ctx.textAlign='start'}
async function drawRackExport(ctx,bounds,withDetails=false){drawNamePlateExport(ctx,bounds);const rackRect=rectIn(rack.getBoundingClientRect(),bounds);ctx.fillStyle='#b8b9b5';ctx.fillRect(rackRect.x,rackRect.y,rackRect.width,rackRect.height);ctx.strokeStyle='#777b78';ctx.lineWidth=2;ctx.strokeRect(rackRect.x+1,rackRect.y+1,rackRect.width-2,rackRect.height-2);const entries=[...rack.querySelectorAll('.ribbon img')].map(img=>({img,item:ribbons.find(r=>r.id===img.closest('[data-preview]')?.dataset.preview),rect:rectIn(img.getBoundingClientRect(),bounds)})).filter(entry=>entry.item),sources=new Map;await Promise.all([...new Set(entries.map(entry=>entry.item.src))].map(async src=>sources.set(src,await loadExportImage(src))));entries.forEach(({img,item,rect})=>{const source=sources.get(item.src)||img;if(!source?.naturalWidth)return;ctx.drawImage(source,rect.x,rect.y,rect.width,rect.height);ctx.strokeStyle='rgba(30,38,40,.45)';ctx.lineWidth=1;ctx.strokeRect(rect.x+.5,rect.y+.5,rect.width-1,rect.height-1)});[...rack.querySelectorAll('.award-marker')].forEach(marker=>{const rect=rectIn(marker.getBoundingClientRect(),bounds);ctx.save();ctx.font=`700 ${Math.max(16,rect.height*.9)}px Georgia,serif`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.lineWidth=2;ctx.strokeStyle='#4b443f';ctx.fillStyle='#f4f0e7';ctx.strokeText(marker.textContent,rect.x+rect.width/2,rect.y+rect.height/2);ctx.fillText(marker.textContent,rect.x+rect.width/2,rect.y+rect.height/2);ctx.restore()});if(withDetails)drawRackDetails(ctx,bounds,entries)}
const canvasBlob=canvas=>new Promise(resolve=>canvas.toBlob?canvas.toBlob(resolve,'image/png'):resolve(null));
async function exportCanvas(target,filename,exportTab,withDetails=false){const isRackExport=target===$('#ribbonAssembly'),button=withDetails?$('#exportRackDetails'):isRackExport?$('#exportRack'):$('#exportUniform'),original=button.textContent;button.disabled=true;button.textContent='正在生成…';try{await document.fonts?.ready;const bounds=target.getBoundingClientRect(),scale=4,extraHeight=withDetails?detailHeight():0,canvas=document.createElement('canvas');canvas.width=Math.ceil(bounds.width*scale);canvas.height=Math.ceil((bounds.height+extraHeight)*scale);const ctx=canvas.getContext('2d');ctx.scale(scale,scale);if(isRackExport){ctx.fillStyle='#b8b9b5';ctx.fillRect(0,0,bounds.width,bounds.height)}else{ctx.fillStyle=forceThemes[force].background;ctx.fillRect(0,0,bounds.width,bounds.height);ctx.strokeStyle='rgba(255,255,255,.18)';ctx.lineWidth=1;ctx.beginPath();ctx.arc(0,-150,240,0,Math.PI*2);ctx.arc(bounds.width,-150,240,0,Math.PI*2);ctx.stroke();ctx.fillStyle='rgba(213,190,119,.85)';ctx.save();ctx.translate(-10,90);ctx.rotate(-.45);ctx.fillRect(-50,-25,190,60);ctx.translate(bounds.width+20,0);ctx.rotate(.9);ctx.fillRect(-50,-25,190,60);ctx.restore()}await drawRackExport(ctx,bounds,withDetails);const blob=await canvasBlob(canvas);if(!blob)throw new Error('PNG 编码失败');const url=URL.createObjectURL(blob);if(exportTab){exportTab.location.href=url;setTimeout(()=>URL.revokeObjectURL(url),60000)}else{const link=document.createElement('a');link.download=filename;link.href=url;link.click();setTimeout(()=>URL.revokeObjectURL(url),60000)}}catch(_){exportTab?.close();alert('导出失败，请稍候重试。')}finally{button.disabled=false;button.textContent=original}}
function beginExport(target,filename,withDetails=false){const exportTab=isMobileSafari()?window.open('about:blank','_blank'):null;if(exportTab)exportTab.document.write('<title>正在生成图片…</title><p style="font-family:system-ui;text-align:center;padding-top:20vh">正在生成 PNG，请稍候…</p>');exportCanvas(target,filename,exportTab,withDetails)}
$('#exportRack').addEventListener('click',()=>beginExport($('#ribbonAssembly'),'勋表排列-原图.png'));$('#exportRackDetails').addEventListener('click',()=>beginExport($('#ribbonAssembly'),'勋表排列-含说明.png',true));$('#exportUniform').addEventListener('click',()=>beginExport($('.uniform-canvas'),'勋表佩戴效果-原图.png'));
selected=ordered();render();
