
// -------------------------------------------
// 17/12/2020 : gestion de la conversion numérique pour des champs undefined (pas saisis dans le formulaire => pas extraits dans le Json) 
// -------------------------------------------
ParseInt_Survea = function(element){
	if (element){
		return parseInt(element) ;
	}
	else
	{
		return "" ;
	}
}

// -------------------------------------------
exports.formatting = function(jsonContent){
	line = {
		// Copier le code d'initialisation des variables à utiliser dans le modèle de rapport
		// -------------------------------------------
		"header1" : "",
		"header2" : "",
		"header3" : "",
		"header4" : "",
		"header5" : "",
		"header6" : "",
		"header7" : "",
		"header8" : "",
		"header9" : "",
		"header10" : "",
		"header11" : "",
		"header12" : "",
		"header13" : "",
		"header14" : "",
		"header15" : "",
		"header16" : "",
		"header17" : "",
		"header18" : "",
		"header19" : "",
		"header20" : "",
		"header21" : "",
		"header22" : "",
		"header23" : "",
		"header24" : "",
		"header25" : "",
		"header26" : "",
		"header27" : "",
		"header28" : "",
		"header29" : "",
		"header30" : "",
		"header31" : "",
		"header32" : "",
		"header33" : "",
		"header34" : "",
		"header35" : "",
		"header36" : "",
		"header37" : "",
		"header38" : "",
		"header39" : "",
		"header40" : "",
		"header41" : "",
		"header42" : "",
		"header43" : "",
		"header44" : "",
		"header45" : "",
		"header46" : "",
		"header47" : "",
		"header48" : "",
		"header49" : "",
		"header50" : "",
		"header51" : "",
		"header52" : "",
		"header53" : "",
		"header54" : "",
		"header55" : "",
		"header56" : "",
		"header57" : "",
		"header58" : "",
		"header59" : "",
		"header60" : "",
		"header61" : "",
		"header62" : "",
		"header63" : "",
		"header64" : "",
		"header65" : "",
		"header66" : "",
		"header67" : "",
		"header68" : "",
		"header69" : "",
		"header70" : "",
		"header71" : "",
		"header72" : "",
		"header73" : "",
		"header74" : "",
		"header75" : "",
		"header76" : "",
		"header77" : "",
		"header78" : "",
		"header79" : "",
		"header80" : "",
		"header81" : "",
		"header82" : "",
		"header83" : "",
		"header84" : "",
		"header85" : "",
		"header86" : "",
		"header87" : "",
		"header88" : "",
		"header89" : "",
		"header90" : "",
		"header91" : "",
		"header92" : "",
		"header93" : "",
		"header94" : "",
		"header95" : "",
		"header96" : "",
		"header97" : "",
		"header98" : "",
		"header99" : "",
		"header100" : "",
		"header101" : "",
		"header102" : "",
		"header103" : "",
		"header104" : "",
		"header105" : "",
		"header106" : "",
		"header107" : "",
		"header108" : "",
		"header109" : "",
		"header110" : "",
		"header111" : "",
		"header112" : "",
		"header113" : "",
		"header114" : "",
		"header115" : "",
		"header116" : "",
		"header117" : "",
		"header118" : "",
		"header119" : "",
		"header120" : "",
		"header121" : "",
		"header122" : "",
		"header123" : "",
		"header124" : "",
		"header125" : "",
		"header126" : "",
		"header127" : "",
		"header128" : "",
		"header129" : "",
		"header130" : "",
		"header131" : "",
		"header132" : "",
		"header133" : "",
		"header134" : "",
		"header135" : "",
		"header136" : "",
		"header137" : "",
		"header138" : "",
		"header139" : "",
		"header140" : "",
		"header141" : "",
		"header142" : "",
		"header143" : "",
		"header144" : "",
		"header145" : "",
		"header146" : "",
		"header147" : "",
		"header148" : "",
		"header149" : "",
		"header150" : "",
		"header151" : "",
		"header152" : "",
		"header153" : "",
		"header154" : "",
		"header155" : "",
		"header156" : "",
		"header157" : "",
		"header158" : "",
		"header159" : "",
		"header160" : "",
		"header161" : "",
		"header162" : "",
		"header163" : "",
		"header164" : "",
		"header165" : "",
		"header166" : "",
		"header167" : "",
		"header168" : "",
		"header169" : "",
		"header170" : "",
		"header171" : "",
		"header172" : "",
		"header173" : "",
		"header174" : "",
		"header175" : "",
		"header176" : "",
		"header177" : "",
		"header178" : "",
		"header179" : "",
		"header180" : "",
		"header181" : "",
		"header182" : "",
		"header183" : "",
		"header184" : "",
		"header185" : "",
		"header186" : "",
		"header187" : "",
		"header188" : "",
		"header189" : "",
		"header190" : "",
		"header191" : "",
		"header192" : "",
		"header193" : "",
		"header194" : "",
		"header195" : "",
		"header196" : "",
		"header197" : "",
		"header198" : "",
		"header199" : "",
		"header200" : "",
		"header201" : "",
		"header202" : "",
		"header203" : "",
		"header204" : "",
		"header205" : "",
		"header206" : "",
		"header207" : "",
		"header208" : "",
		"header209" : "",
		"header210" : "",
		"header211" : "",
		"header212" : "",
		"header213" : "",
		"header214" : "",
		"header215" : "",
		"header216" : "",
		"header217" : "",
		"header218" : "",
		"header219" : "",
		"header220" : "",
		"header221" : "",
		"header222" : "",
		"header223" : "",
		"header224" : "",
		"header225" : "",
		"header226" : "",
		"header227" : "",
		"header228" : "",
		"header229" : "",
		"header230" : "",
		"header231" : "",
		"header232" : "",
		"header233" : "",
		"header234" : "",
		"header235" : "",
		"header236" : "",
		"header237" : "",
		"header238" : "",
		"header239" : "",
		"header240" : "",
		"header241" : "",
		"header242" : "",
		"header243" : "",
		"header244" : "",
		"header245" : "",
		"header246" : "",
		"header247" : "",
		"header248" : "",
		"header249" : "",
		"header250" : "",
		"header251" : "",
		"header252" : "",
		"header253" : "",
		"header254" : "",
		"header255" : "",
		"header256" : "",
		"header257" : "",
		"header258" : "",
		"header259" : "",
		"header260" : "",
		"header261" : "",
		"header262" : "",
		"header263" : "",
		"header264" : "",
		"header265" : "",
		"header266" : "",
		"header267" : "",
		"header268" : "",
		"header269" : "",
		"header270" : "",
		"header271" : "",
		"header272" : "",
		"header273" : "",
		"header274" : "",
		"header275" : "",
		"header276" : "",
		"header277" : "",
		"header278" : "",
		"header279" : "",
		"header280" : "",
		"header281" : "",
		"header282" : "",
		"header283" : "",
		"header284" : "",
		"header285" : "",
		"header286" : "",
		"header287" : "",
		"header288" : "",
		"header289" : "",
		"header290" : "",
		"header291" : "",
		"header292" : "",
		"header293" : "",
		"header294" : "",
		"header295" : "",
		"header296" : "",
		"header297" : "",
		"header298" : "",
		"header299" : "",
		"header300" : "",
		"header301" : "",
		"header302" : "",
		"header303" : "",
		"header304" : "",
		"header305" : "",
		"header306" : "",
		"header307" : "",
		"header308" : "",
		"header309" : "",
		"header310" : "",
		"header311" : "",
		"header312" : "",
		"header313" : "",
		"header314" : "",
		"header315" : "",
		"header316" : "",
		"header317" : "",
		"header318" : "",
		"header319" : "",
		"header320" : "",
		"header321" : "",
		"header322" : "",
		"header323" : "",
		"header324" : "",
		"header325" : "",
		"header326" : "",
		"header327" : "",
		"header328" : "",
		"header329" : "",
		"header330" : "",
		"header331" : "",
		"header332" : "",
		"header333" : "",
		"header334" : "",
		"header335" : "",
		"header336" : "",
		"header337" : "",
		"header338" : "",
		"header339" : "",
		"header340" : "",
		"header341" : "",
		"header342" : "",
		"header343" : "",
		"header344" : "",
		"header345" : "",
		"header346" : "",
		"header347" : "",
		"header348" : "",
		"header349" : "",
		"header350" : "",
		"header351" : "",
		"header352" : "",
		"header353" : "",
		"header354" : "",
		"header355" : "",
		"header356" : "",
		"header357" : "",
		"header358" : "",
		"header359" : "",
		"header360" : "",
		"header361" : "",
		"header362" : "",
		"header363" : "",
		"header364" : "",
		"header365" : "",
		"header366" : "",
		"header367" : "",
		"header368" : "",
		"header369" : "",
		"header370" : "",
		"header371" : "",
		"header372" : "",
		"header373" : "",
		"header374" : "",
		"header375" : "",
		"header376" : "",
		"header377" : "",
		"header378" : "",
		"header379" : "",
		"header380" : "",
		"header381" : "",
		"header382" : "",
		"header383" : "",
		"header384" : "",
		"header385" : "",
		"header386" : "",
		"header387" : "",
		"header388" : "",
		"header389" : "",
		"header390" : "",
		"header391" : "",
		"header392" : "",
		"header393" : "",
		"header394" : "",
		"header395" : "",
		"header396" : "",
		"header397" : "",
		"header398" : "",
		"header399" : "",
		"header400" : "",
		"header401" : "",
		"header402" : "",
		"header403" : "",
		"header404" : "",
		"header405" : "",
		"header406" : "",
		"header407" : "",
		"header408" : "",
		"header409" : "",
		"header410" : "",
		"header411" : "",
		"header412" : "",
		"header413" : "",
		"header414" : "",
		"header415" : "",
		"header416" : "",
		"header417" : "",
		"header418" : "",
		"header419" : "",
		"header420" : "",
		"header421" : "",
		"header422" : "",
		"header423" : "",
		"header424" : "",
		"header425" : "",
		"header426" : "",
		"header427" : "",
		"header428" : "",
		"header429" : "",
		"header430" : "",
		"header431" : "",
		"header432" : "",
		"header433" : "",
		"header434" : "",
		"header435" : "",
		"header436" : "",
		"header437" : "",
		"header438" : "",
		"header439" : "",
		"header440" : "",
		"header441" : "",
		"header442" : "",
		"header443" : "",
		"header444" : "",
		"header445" : "",
		"header446" : "",
		"header447" : "",
		"header448" : "",
		"header449" : "",
		"header450" : "",
		"header451" : "",
		"header452" : "",
		"header453" : "",
		"header454" : "",
		"header455" : "",
		"header456" : "",
		"header457" : "",
		"header458" : "",
		"header459" : "",
		"header460" : "",
		"header461" : "",
		"header462" : "",
		"header463" : "",
		"header464" : "",
		"header465" : "",
		"header466" : "",
		"header467" : "",
		"header468" : "",
		"header469" : "",
		"header470" : "",
		"header471" : "",
		"header472" : "",
		"header473" : "",
		"header474" : "",
		"header475" : "",
		"header476" : "",
		"header477" : "",
		"header478" : "",
		"header479" : "",
		"header480" : "",
		"header481" : "",
		"header482" : "",
		"header483" : "",
		"header484" : "",
		"header485" : "",
		"header486" : "",
		"header487" : "",
		"header488" : "",
		"header489" : "",
		"header490" : "",
		"header491" : "",
		"header492" : "",
		"header493" : "",
		"header494" : "",
		"header495" : "",
		"header496" : "",
		"header497" : "",
		"header498" : "",
		"header499" : "",
		"header500" : "",
		"header501" : "",
		"header502" : "",
		"header503" : "",
		"header504" : "",
		"header505" : "",
		"header506" : "",
		"header507" : "",
		"header508" : "",
		"header509" : "",
		"header510" : "",
		"header511" : "",
		"header512" : "",
		"header513" : "",
		"header514" : "",
		"header515" : "",
		"header516" : "",
		"header517" : "",
		"header518" : "",
		"header519" : "",
		"header520" : "",
		"header521" : "",
		"header522" : "",
		"header523" : "",
		"header524" : "",
		"header525" : "",
		"header526" : "",
		"header527" : "",
		"header528" : "",
		"header529" : "",
		"header530" : "",
		"header531" : "",
		"header532" : "",
		"header533" : "",
		"header534" : "",
		"header535" : "",
		"header536" : "",
		"header537" : "",
		"header538" : "",
		"header539" : "",
		"header540" : "",
		"header541" : "",
		"header542" : "",
		"header543" : "",
		"header544" : "",
		"header545" : "",
		"header546" : "",
		"header547" : "",
		"header548" : "",
		"header549" : "",
		"header550" : "",
		"header551" : "",
		"header552" : "",
		"header553" : "",
		"header554" : "",
		"header555" : "",
		"header556" : "",
		"header557" : "",
		"header558" : "",
		"header559" : "",
		"header560" : "",
		"header561" : "",
		"header562" : "",
		"header563" : "",
		"header564" : "",
		"header565" : "",
		"header566" : "",
		"header567" : "",
		"header568" : "",
		"header569" : "",
		"header570" : "",
		"header571" : "",
		"header572" : "",
		"header573" : "",
		"header574" : "",
		"header575" : "",
		"header576" : "",
		"header577" : "",
		"header578" : "",
		"header579" : "",
		"header580" : "",
		"header581" : "",
		"header582" : "",
		"header583" : "",
		"header584" : "",
		"header585" : "",
		"header586" : "",
		"header587" : "",
		"header588" : "",
		"header589" : "",
		"header590" : "",
		"header591" : "",
		"header592" : "",
		"header593" : "",
		"header594" : "",
		"header595" : "",
		"header596" : "",
		"header597" : "",
		"header598" : "",
		"header599" : "",
		"header600" : "",
		"header601" : "",
		"header602" : "",
		"header603" : "",
		"header604" : "",
		"header605" : "",
		"header606" : "",
		"header607" : "",
		"header608" : "",
		"header609" : "",
		"header610" : "",
		"header611" : "",
		"header612" : "",
		"header613" : "",
		"header614" : "",
		"header615" : "",
		"header616" : "",
		"header617" : "",
		"header618" : "",
		"header619" : "",
		"header620" : "",
		"header621" : "",
		"header622" : "",
		"header623" : "",
		"header624" : "",
		"header625" : "",
		"header626" : "",
		"header627" : "",
		"header628" : "",
		"header629" : "",
		"header630" : "",
		"header631" : "",
		"header632" : "",
		"header633" : "",
		"header634" : "",
		"header635" : "",
		"header636" : "",
		"header637" : "",
		"header638" : "",
		"header639" : "",
		"header640" : "",
		"header641" : "",
		"header642" : "",
		"header643" : ""
		// -------------------------------------------
	}
	resultat = {
		"data" : []
	}
	jsonContent.forEach((element, index) => {
		new_line = Object.assign({}, line)

		// Pb de traitement Excel pour les valeurs numériques à sommer : extraction en texte => pas de somme des colonnes !!
		// new_line["header13"] = index	// forcé en numérique pour test somme dans table => OK 
		// => a voir : extraire les données censées être numériques en valeur !

		// Copier le code d'initialisation des variables : variable rapport = variable formulaire ou calcul
		// -------------------------------------------
		
		new_line["header1"] = element["ID_EXPL_NOM_EXPLOITATION"]
		new_line["header2"] = element["ID_EXPL_NOM_EXPLOITANT"]
		new_line["header3"] = element["ID_EXPL_PRENOM_EXPLOITANT"]
		new_line["header4"] = element["ID_EXPL_DATE_DIAGNOSTIC"]
		new_line["header5"] = element["ID_EXPL_LETTRE"]
		new_line["header6"] = element["ID_EXPL_LETTRE_NOUVELLE"]
		new_line["header7"] = element["ID_EXPL_ADRESSE_EXPLOITATION"]
		new_line["header8"] = element["ID_EXPL_AGE_FORMATION"]
		new_line["header9"] = element["ID_EXPL_RQ_EXPLOITANT"]
		new_line["header10"] = element["ID_EXPL_COMMENTAITE_ANTEA"]
		new_line["header11"] = parseInt(element["ID_EXPL_STATUT_V_SOCIETE"])
		new_line["header12"] = parseInt(element["ID_EXPL_STATUT_V_EARL"])
		new_line["header13"] = parseInt(element["ID_EXPL_STATUT_V_GAEC"])
		new_line["header14"] = parseInt(element["ID_EXPL_STATUT_V_SCEA"])
		new_line["header15"] = parseInt(element["ID_EXPL_STATUT_V_SEUL"])
		new_line["header16"] = parseInt(element["ID_EXPL_STATUT_V_SAS"])
		new_line["header17"] = parseInt(element["ID_EXPL_STATUT_V_AUTRE"])
		new_line["header18"] = element["ID_EXPL_SIEGE_AAC_ZPAAC"]
		new_line["header19"] = element["ID_EXPL_SIEGE_AAC_ZPAAC_COMMENT"]
		new_line["header20"] = element["ID_EXPL_APPARTENANCE_GP_EXPLOITANTS"]
		new_line["header21"] = element["ID_EXPL_GP_EXPLOITANTS"]
		new_line["header22"] = element["ID_EXPL_APPARTENANCE_CUMA"]
		new_line["header23"] = element["ID_EXPL_PRESTATIONS"]
		new_line["header24"] = element["FCT_EXPL_ORI_ORIENTATION_EXPLOITATION/GRANDES_CULTURES"]
		new_line["header25"] = element["FCT_EXPL_ORI_ORIENTATION_EXPLOITATION/BETTERAVES"]
		new_line["header26"] = element["FCT_EXPL_ORI_ORIENTATION_EXPLOITATION/POMMES_TERRE"]
		new_line["header27"] = element["FCT_EXPL_ORI_ORIENTATION_EXPLOITATION/CULTURES_SPECIALISEES"]
		new_line["header28"] = element["FCT_EXPL_ORI_ORIENTATION_EXPLOITATION/POLYCULTURE_ELEVAGE"]
		new_line["header29"] = element["FCT_EXPL_ORI_ORIENTATION_EXPLOITATION/BOVINS_LAIT"]
		new_line["header30"] = element["FCT_EXPL_ORI_ORIENTATION_EXPLOITATION/BOVINS_VIANDE"]
		new_line["header31"] = element["FCT_EXPL_ORI_ORIENTATION_EXPLOITATION/AUTRE"]
		new_line["header32"] = element["FCT_EXPL_ORI_OTHER"]
		new_line["header33"] = element["FCT_EXPL_SURF_SAU"]
		new_line["header34"] = element["FCT_EXPL_SURF_DONT_ZPAAC"]
		new_line["header35"] = element["0"]
		new_line["header36"] = element["FCT_EXPL_SURF_DONT_DRAINEE_ZPAAC"]
		new_line["header37"] = element["FCT_EXPL_IRRI_IRRIGATION_PARCELLES"]
		new_line["header38"] = element["FCT_EXPL_IRRI_AAC"]
		new_line["header39"] = element["FCT_EXPL_IRRI_SURFACE"]
		new_line["header40"] = element["FCT_EXPL_IRRI_CULTURES"]
		new_line["header41"] = element["FCT_EXPL_IRRI_PARCELLES"]
		new_line["header42"] = element["FCT_EXPL_IRRI_CONDITIONS/SYSTEMATIQUEMENT"]
		new_line["header43"] = element["FCT_EXPL_IRRI_CONDITIONS/EN_CAS_SECHERESSE"]
		new_line["header44"] = element["FCT_EXPL_IRRI_CONDITIONS/AUTRE"]
		new_line["header45"] = element["FCT_EXPL_IRRI_OTHER"]
		new_line["header46"] = element["FCT_EXPL_FORA_LOCALISATION_FORAGES_UTILISES"]
		new_line["header47"] = element["FCT_EXPL_FORA_ENTRETIEN_FORAGES"]
		new_line["header48"] = element["FCT_EXPL_FORA_ENTRETIEN_FREQUENCE"]
		new_line["header49"] = element["FCT_EXPL_FORA_PRECAUTIONS_FORAGES"]
		new_line["header50"] = element["FCT_EXPL_FORA_ANALYSES_EAU"]
		new_line["header51"] = element["FCT_EXPL_FORA_RESULTATS_DANS_GESTION_FERTILISATION"]
		new_line["header52"] = element["FCT_EXPL_ZPAAC_IDENTIFICATION_PARCELLES_ZPAAC"]
		new_line["header53"] = element["FCT_EXPL_ZPAAC_ACCORD_TRANSMISSION_RPG_POUR_ANTEA"]
		new_line["header54"] = element["FCT_EXPL_ZPAAC_ASSOCIES_OUI_NON"]
		new_line["header55"] = element["FCT_EXPL_ZPAAC_ASSOCIES_COMBIEN_AFFICHE"]
		new_line["header56"] = element["FCT_EXPL_ZPAAC_ASSOCIES_COMMENT"]
		new_line["header57"] = element["FCT_EXPL_ZPAAC_SALARIES_COMBIEN_AFFICHE"]
		new_line["header58"] = element["FCT_EXPL_ZPAAC_SALARIES_COMMENT"]
		new_line["header59"] = element["FCT_EXPL_ZPAAC_PERIODES_SURCHARGE_TRAVAIL_OUI_NON"]
		new_line["header60"] = element["FCT_EXPL_ZPAAC_PERIODES_SURCHARGE_TRAVAIL_QUAND"]
		new_line["header61"] = ParseInt_Survea(element["FCT_EXPL_PHAS_PHASE_EXPLOITATION_V_INSTALLATION"])
		new_line["header62"] = ParseInt_Survea(element["FCT_EXPL_PHAS_PHASE_EXPLOITATION_V_REPRISE_EXPLOITATION"])
		new_line["header63"] = element["FCT_EXPL_PHAS_REMARQUE"]
		new_line["header64"] = ParseInt_Survea(element["FCT_EXPL_PHAS_PHASE_EXPLOITATION_V_PHASE_TRANSITION"])
		new_line["header65"] = ParseInt_Survea(element["FCT_EXPL_PHAS_PHASE_EXPLOITATION_V_VITESSE_CROISIERE"])
		new_line["header66"] = ParseInt_Survea(element["FCT_EXPL_PHAS_PHASE_EXPLOITATION_V_PROCHE_SUCCESSIONARRET"])
		new_line["header67"] = element["CARTO_LOCA_DRAIN_PARCELLES_DRAINEES"]
		new_line["header68"] = element["CARTO_LOCA_DRAIN_FOSSES_DRAINS"]
		new_line["header69"] = element["CARTO_LOCA_DRAIN_EXUTOIRES_DRAINAGE"]
		new_line["header70"] = element["CARTO_LOCA_EXIST_ZONES_TAMPONS"]
		new_line["header71"] = element["CARTO_LOCA_EXIST_FRICHES"]
		new_line["header72"] = element["CARTO_LOCA_EXIST_CHEMINS_CREUX"]
		new_line["header73"] = element["CARTO_LOCA_EXIST_HAIES"]
		new_line["header74"] = element["CARTO_LOCA_EXIST_BANDES_ENHERBEES"]
		new_line["header75"] = element["CARTO_LOCA_EXIST_TALUS"]
		new_line["header76"] = element["CARTO_LOCA_EXIST_ARBRES_ISOLES"]
		new_line["header77"] = element["CARTO_LOCA_EXIST_BOSQUETS"]
		new_line["header78"] = element["CARTO_LOCA_STATUT_ZONES_STATUT_REGLEMENTAIRE"]
		new_line["header79"] = element["CARTO_LOCA_STATUT_ZONES_STATUT_REGLEMENTAIRE_LEQUEL"]
		new_line["header80"] = element["CARTO_LOCA_EXIST_POINTS_EAU"]
		new_line["header81"] = element["CARTO_LOCA_EXIST_ZONES_HUMIDES"]
		new_line["header82"] = element["CARTO_LOCA_EXIST_ZONES_INONDABLES"]
		new_line["header83"] = element["CARTO_LOCA_EXIST_BETOIRES"]
		new_line["header84"] = element["CARTO_LOCA_EXIST_ZONE_RUISSELLEMENT"]
		new_line["header85"] = element["CARTO_LOCA_COURS_EAU_PAC_PRECISER_COURS_EAU_FOSSES"]
		new_line["header86"] = element["CARTO_LOCA_COURS_EAU_PAC_COURS_EAU_FOSSES_PRECISIONS"]
		new_line["header87"] = element["CARTO_LOCA_EXIST_PENTE_7_POURCENT"]
		new_line["header88"] = element["CARTO_LOCA_EXIST_PENTE_COMMENT"]
		new_line["header89"] = element["CARTO_AMENAGT_EXPLOITATION_5_AN/REGROUPEMENT_PARCELLES"]
		new_line["header90"] = element["CARTO_AMENAGT_EXPLOITATION_5_AN/ARRACHAGE_HAIES"]
		new_line["header91"] = element["CARTO_AMENAGT_EXPLOITATION_5_AN/MISE_PLACE_BANDES_ENHERBEES"]
		new_line["header92"] = element["CARTO_AMENAGT_EXPLOITATION_5_AN/RECTIFICATION_FOSSES_COURS_EAU"]
		new_line["header93"] = element["CARTO_AMENAGT_EXPLOITATION_5_AN/MISE_PLACE_DRAINS"]
		new_line["header94"] = element["CARTO_AMENAGT_EXPLOITATION_5_AN/COMBLEMENT_MOUILLERES_FOSSES"]
		new_line["header95"] = element["CARTO_AMENAGT_EXPLOITATION_5_AN/INSTALLATION_HAIES"]
		new_line["header96"] = element["CARTO_AMENAGT_EXPLOITATION_5_AN/AUTRE"]
		new_line["header97"] = element["CARTO_AMENAGT_EXPLOITATION_5_AN/AUCUN"]
		new_line["header98"] = element["CARTO_AMENAGT_EXPLOITATION_5_AN_OTHER"]
		new_line["header99"] = element["CARTO_ASSOL_ROTATIONS"]
		new_line["header100"] = element["CARTO_ASSOL_ROTATIONS_ZPAAC"]
		new_line["header101"] = element["CARTO_ASSOL_ROTATIONS_ZPAAC_LISTE"]
		new_line["header102"] = element["CARTO_ASSOL_ROTATIONS_PASSEES"]
		new_line["header103"] = element["CARTO_ASSOL_ROTATIONS_PASSEES_LISTE"]
		new_line["header104"] = element["CARTO_ASSOL_RAISONS_CHANGE_ROTATIONS"]
		new_line["header105"] = element["PHYTO_DONN_TRANSMISSION_FICHES"]
		new_line["header106"] = element["PHYTO_DONN_CAMPAGNE_N"]
		new_line["header107"] = element["PHYTO_DONN_CAMPAGNE_NM1"]
		new_line["header108"] = element["PHYTO_DONN_CAMPAGNE_NM2"]
		new_line["header109"] = element["PHYTO_SUPPORT_LEQUEL/SUPPORT_INFORMATIQUE"]
		new_line["header110"] = element["PHYTO_SUPPORT_LEQUEL/CAHIER_PERSONNEL"]
		new_line["header111"] = element["PHYTO_SUPPORT_LEQUEL/AUTRE"]
		new_line["header112"] = element["PHYTO_APPLI_OBJET_PAS_CONSEIL"]
		new_line["header113"] = element["PHYTO_APPLI_OBJET/D_UN_CONSEIL_TECHNICIEN"]
		new_line["header114"] = element["PHYTO_APPLI_OBJET/D_UN_CONSEIL_CAGEDA"]
		new_line["header115"] = element["PHYTO_APPLI_OBJET/D_UN_CONSEIL_CETA"]
		new_line["header116"] = element["PHYTO_APPLI_OBJET/D_UN_CONSEIL_COOPNEGOCE"]
		new_line["header117"] = element["PHYTO_APPLI_OBJET/DE_RECOMMANDATIONS_BULLETIN_SANTE_VEGETALE"]
		new_line["header118"] = element["PHYTO_APPLI_OBJET/DE_RECOMMANDATIONS_PRESSE_SPECIALISEE"]
		new_line["header119"] = element["PHYTO_APPLI_OBJET/D_UNE_OBSERVATION_CULTURE_PARCELLE"]
		new_line["header120"] = element["PHYTO_APPLI_OBJET/D_UNE_CONNAISSANCE_PARCELLE"]
		new_line["header121"] = element["PHYTO_APPLI_OBJET/D_UNE_OBSERVATION_CONDITIONS_CLIMATIQUES"]
		new_line["header122"] = element["PHYTO_APPLI_OBJET/D_UN_PROGRAMME_PRE_ETABLI"]
		new_line["header123"] = element["PHYTO_APPLI_OBJET/AUTRE"]
		new_line["header124"] = element["PHYTO_APPLI_PAR_CONSEIL_OTHER "]
		new_line["header125"] = element["PHYTO_APPLI_OBJET_CONSEIL_COMMENTAIRE"]
		new_line["header126"] = element["PHYTO_APPLI_CET_ITINERAIRE_EST-IL_MODIFIE_EN_COURS_CAMPAGNE"]
		new_line["header127"] = element["PHYTO_APPLI_RAISONS"]
		new_line["header128"] = element["PHYTO_APPLI_CHANGEMENTS_CAMP_N_NM1_NM2"]
		new_line["header129"] = element["PHYTO_APPLI_CHANGEMENTS_CAMP_N_NM1_NM2_LESQUELS"]
		new_line["header130"] = element["PHYTO_CRIT_TRAIT_HERBICIDES/LA_CULTURE"]
		new_line["header131"] = element["PHYTO_CRIT_TRAIT_HERBICIDES/LE_PARASITE_VISE"]
		new_line["header132"] = element["PHYTO_CRIT_TRAIT_HERBICIDES/LE_PRECEDENT_CULTURAL"]
		new_line["header133"] = element["PHYTO_CRIT_TRAIT_HERBICIDES/LA_ROTATION"]
		new_line["header134"] = element["PHYTO_CRIT_TRAIT_HERBICIDES/LA_VARIETE"]
		new_line["header135"] = element["PHYTO_CRIT_TRAIT_HERBICIDES/LES_AUXILIAIRES"]
		new_line["header136"] = element["PHYTO_CRIT_TRAIT_HERBICIDES/LES_CONDITIONS_CLIMATIQUES"]
		new_line["header137"] = element["PHYTO_CRIT_TRAIT_HERBICIDES/LES_CARACTERISTIQUES_MATIERES_ACTIVES_UTILISEES_TOXICITE_EFFICACITE"]
		new_line["header138"] = element["PHYTO_CRIT_TRAIT_HERBICIDES/DES_CRITERES_ECONOMIQUES"]
		new_line["header139"] = element["PHYTO_CRIT_TRAIT_HERBICIDES_RQ"]
		new_line["header140"] = element["PHYTO_STRAT_TRAIT_HERBICIDES/PREVENTIVE"]
		new_line["header141"] = element["PHYTO_STRAT_TRAIT_HERBICIDES/SYSTEMATIQUE"]
		new_line["header142"] = element["PHYTO_STRAT_TRAIT_HERBICIDES/CURATIVE"]
		new_line["header143"] = element["PHYTO_CRIT_TRAIT_FONGICIDES/LA_CULTURE"]
		new_line["header144"] = element["PHYTO_CRIT_TRAIT_FONGICIDES/LE_PARASITE_VISE"]
		new_line["header145"] = element["PHYTO_CRIT_TRAIT_FONGICIDES/LE_PRECEDENT_CULTURAL"]
		new_line["header146"] = element["PHYTO_CRIT_TRAIT_FONGICIDES/LA_ROTATION"]
		new_line["header147"] = element["PHYTO_CRIT_TRAIT_FONGICIDES/LA_VARIETE"]
		new_line["header148"] = element["PHYTO_CRIT_TRAIT_FONGICIDES/LES_AUXILIAIRES"]
		new_line["header149"] = element["PHYTO_CRIT_TRAIT_FONGICIDES/LES_CONDITIONS_CLIMATIQUES"]
		new_line["header150"] = element["PHYTO_CRIT_TRAIT_FONGICIDES/LES_CARACTERISTIQUES_MATIERES_ACTIVES_UTILISEES_TOXICITE_EFFICACITE"]
		new_line["header151"] = element["PHYTO_CRIT_TRAIT_FONGICIDES/DES_CRITERES_ECONOMIQUES"]
		new_line["header152"] = element["PHYTO_CRIT_TRAIT_FONGICIDES_RQ"]
		new_line["header153"] = element["PHYTO_STRAT_TRAIT_FONGICIDES/PREVENTIVE"]
		new_line["header154"] = element["PHYTO_STRAT_TRAIT_FONGICIDES/SYSTEMATIQUE"]
		new_line["header155"] = element["PHYTO_STRAT_TRAIT_FONGICIDES/CURATIVE"]
		new_line["header156"] = element["PHYTO_CRIT_TRAIT_INSECTICIDES/LA_CULTURE"]
		new_line["header157"] = element["PHYTO_CRIT_TRAIT_INSECTICIDES/LE_PARASITE_VISE"]
		new_line["header158"] = element["PHYTO_CRIT_TRAIT_INSECTICIDES/LE_PRECEDENT_CULTURAL"]
		new_line["header159"] = element["PHYTO_CRIT_TRAIT_INSECTICIDES/LA_ROTATION"]
		new_line["header160"] = element["PHYTO_CRIT_TRAIT_INSECTICIDES/LA_VARIETE"]
		new_line["header161"] = element["PHYTO_CRIT_TRAIT_INSECTICIDES/LES_AUXILIAIRES"]
		new_line["header162"] = element["PHYTO_CRIT_TRAIT_INSECTICIDES/LES_CONDITIONS_CLIMATIQUES"]
		new_line["header163"] = element["PHYTO_CRIT_TRAIT_INSECTICIDES/LES_CARACTERISTIQUES_MATIERES_ACTIVES_UTILISEES_TOXICITE_EFFICACITE"]
		new_line["header164"] = element["PHYTO_CRIT_TRAIT_INSECTICIDES/DES_CRITERES_ECONOMIQUES"]
		new_line["header165"] = element["PHYTO_CRIT_TRAIT_INSECTICIDES_RQ"]
		new_line["header166"] = element["PHYTO_STRAT_TRAIT_INSECTICIDES/PREVENTIVE"]
		new_line["header167"] = element["PHYTO_STRAT_TRAIT_INSECTICIDES/SYSTEMATIQUE"]
		new_line["header168"] = element["PHYTO_STRAT_TRAIT_INSECTICIDES/CURATIVE"]
		new_line["header169"] = ParseInt_Survea(element["PHYTO_TRAIT_PARA_METHODE_V_TRAITEZ_PLEIN"])
		new_line["header170"] = ParseInt_Survea(element["PHYTO_TRAIT_PARA_METHODE_V_TRAITEZ_ZONE_TOUCHEE"])
		new_line["header171"] = ParseInt_Survea(element["PHYTO_TRAIT_PARA_METHODE_V_AUTRE"])
		new_line["header172"] = element["PHYTO_TRAIT_PARA_METHODE_OTHER"]
		new_line["header173"] = element["PHYTO_TRAIT_PARA_RESISTANCE"]
		new_line["header174"] = element["PHYTO_TRAIT_PARA_RESISTANCE_CIBLES"]
		new_line["header175"] = element["PHYTO_TRAIT_PARA_RESISTANCE_MOLECULES"]
		new_line["header176"] = element["PHYTO_TRAIT_PARA_RESISTANCE_DEPUIS"]
		new_line["header177"] = element["PHYTO_TRAIT_PARA_RESISTANCE_PARCELLES"]
		new_line["header178"] = element["PHYTO_TRAIT_PARA_FOURNISSEURS"]
		new_line["header179"] = element["PHYTO_AUTR_MOYEN_L_DESHERB_MECA_O_N"]
		new_line["header180"] = element["PHYTO_AUTR_MOYEN_L_DESHERB_MECA_TEMPS"]
		new_line["header181"] = element["PHYTO_AUTR_MOYEN_L_DESHERB_MECA_CULTURE"]
		new_line["header182"] = element["PHYTO_AUTR_MOYEN_L_DESHERB_THERM_O_N"]
		new_line["header183"] = element["PHYTO_AUTR_MOYEN_L_DESHERB_THERM_TEMPS"]
		new_line["header184"] = element["PHYTO_AUTR_MOYEN_L_DESHERB_THERM_CULTURE"]
		new_line["header185"] = element["PHYTO_AUTR_MOYEN_L_LUTTE_BIO_O_N"]
		new_line["header186"] = element["PHYTO_AUTR_MOYEN_L_LUTTE_BIO_TEMPS"]
		new_line["header187"] = element["PHYTO_AUTR_MOYEN_L_LUTTE_BIO_CULTURE"]
		new_line["header188"] = element["PHYTO_AUTR_MOYEN_L_ENFOUISST_RESIDUS_O_N"]
		new_line["header189"] = element["PHYTO_AUTR_MOYEN_L_ENFOUISST_RESIDUS_TEMPS"]
		new_line["header190"] = element["PHYTO_AUTR_MOYEN_L_ENFOUISST_RESIDUS_CULTURE"]
		new_line["header191"] = element["PHYTO_AUTR_MOYEN_L_BROYAGE_RESIDUS_O_N"]
		new_line["header192"] = element["PHYTO_AUTR_MOYEN_L_BROYAGE_RESIDUS_TEMPS"]
		new_line["header193"] = element["PHYTO_AUTR_MOYEN_L_BROYAGE_RESIDUS_CULTURE"]
		new_line["header194"] = element["PHYTO_AUTR_MOYEN_L_VARIETE_TOLERANTE_O_N"]
		new_line["header195"] = element["PHYTO_AUTR_MOYEN_L_VARIETE_TOLERANTE_TEMPS"]
		new_line["header196"] = element["PHYTO_AUTR_MOYEN_L_VARIETE_TOLERANTE_CULTURE"]
		new_line["header197"] = element["PHYTO_AUTR_MOYEN_L_DENSITE_SEMIS_O_N"]
		new_line["header198"] = element["PHYTO_AUTR_MOYEN_L_DENSITE_SEMIS_TEMPS"]
		new_line["header199"] = element["PHYTO_AUTR_MOYEN_L_DENSITE_SEMIS_CULTURE"]
		new_line["header200"] = element["PHYTO_AUTR_MOYEN_L_ASSOCIATION_ESPECES_O_N"]
		new_line["header201"] = element["PHYTO_AUTR_MOYEN_L_ASSOCIATION_ESPECES_TEMPS"]
		new_line["header202"] = element["PHYTO_AUTR_MOYEN_L_ASSOCIATION_ESPECES_CULTURE"]
		new_line["header203"] = element["PHYTO_AUTR_MOYEN_L_FAUX_SEMI_O_N"]
		new_line["header204"] = element["PHYTO_AUTR_MOYEN_L_FAUX_SEMI_TEMPS"]
		new_line["header205"] = element["PHYTO_AUTR_MOYEN_L_FAUX_SEMI_CULTURE"]
		new_line["header206"] = element["PHYTO_AUTR_MOYEN_L_BROYAGE_BORDURE_O_N"]
		new_line["header207"] = element["PHYTO_AUTR_MOYEN_L_BROYAGE_BORDURE_TEMPS"]
		new_line["header208"] = element["PHYTO_AUTR_MOYEN_L_BROYAGE_BORDURE_CULTURE"]
		new_line["header209"] = element["PHYTO_AUTR_MOYEN_L_REDUC_PARCELLE_O_N"]
		new_line["header210"] = element["PHYTO_AUTR_MOYEN_L_REDUC_PARCELLE_TEMPS"]
		new_line["header211"] = element["PHYTO_AUTR_MOYEN_L_REDUC_PARCELLE_CULTURE"]
		new_line["header212"] = element["PHYTO_AUTR_MOYEN_L_AMENAGT_CULTURE_O_N"]
		new_line["header213"] = element["PHYTO_AUTR_MOYEN_L_AMENAGT_CULTURE_TEMPS"]
		new_line["header214"] = element["PHYTO_AUTR_MOYEN_L_AMENAGT_CULTURE_CULTURE"]
		new_line["header215"] = element["PHYTO_AUTR_MOYEN_L_ADAPTATION_ROTATION_O_N"]
		new_line["header216"] = element["PHYTO_AUTR_MOYEN_L_ADAPTATION_ROTATION_TEMPS"]
		new_line["header217"] = element["PHYTO_AUTR_MOYEN_L_ADAPTATION_ROTATION_CULTURE"]
		new_line["header218"] = element["PHYTO_AUTR_MOYEN_L_AUTRE_O_N"]
		new_line["header219"] = element["PHYTO_AUTR_MOYEN_L_AUTRE_TEMPS"]
		new_line["header220"] = element["PHYTO_AUTR_MOYEN_L_AUTRE_CULTURE"]
		new_line["header221"] = element["PHYTO_TRAIT_CHIMIQUE_POURQUOI/NECESSITENT_PLUS_TEMPS"]
		new_line["header222"] = element["PHYTO_TRAIT_CHIMIQUE_POURQUOI/NECESSITENT_PLUS_MAIN_D_UVRE"]
		new_line["header223"] = element["PHYTO_TRAIT_CHIMIQUE_POURQUOI/SONT_PLUS_COUTEUSES_TRAITEMENT_CHIMIQUE"]
		new_line["header224"] = element["PHYTO_TRAIT_CHIMIQUE_POURQUOI/NE_SONT_PLUS_EFFICACES"]
		new_line["header225"] = element["PHYTO_TRAIT_CHIMIQUE_POURQUOI/SONT_MAL_ADAPTEES_CLIMAT"]
		new_line["header226"] = element["PHYTO_TRAIT_CHIMIQUE_POURQUOI/PAR_MANQUE_INFORMATIONS"]
		new_line["header227"] = element["PHYTO_TRAIT_CHIMIQUE_POURQUOI/AUTRE"]
		new_line["header228"] = element["PHYTO_TRAIT_CHIMIQUE_POURQUOI_OTHER"]
		new_line["header229"] = element["PHYTO_TRAIT_CHIMIQUE_INFESTATIONS_CULTURES/VISUELLEMENT"]
		new_line["header230"] = element["PHYTO_TRAIT_CHIMIQUE_INFESTATIONS_CULTURES/ANALYSES"]
		new_line["header231"] = element["PHYTO_TRAIT_CHIMIQUE_INFESTATIONS_CULTURES/AUTRE"]
		new_line["header232"] = element["PHYTO_TRAIT_CHIMIQUE_INFESTATIONS_CULTURES_OTHER"]
		new_line["header233"] = element["PHYTO_TRAIT_CHIMIQUE_PRECAUTIONS"]
		new_line["header234"] = element["PHYTO_ENTRETIEN_ABORDS_BATIMENTS"]
		new_line["header235"] = element["PHYTO_ENTRETIEN_ABORDS_BATIMENTS_COMMENT"]
		new_line["header236"] = element["PHYTO_ENTRETIEN_CLOTURE"]
		new_line["header237"] = element["PHYTO_ENTRETIEN_CLOTURE_COMMENT"]
		new_line["header238"] = element["PHYTO_ENTRETIEN_HAIES"]
		new_line["header239"] = element["PHYTO_ENTRETIEN_HAIES_COMMENT"]
		new_line["header240"] = element["PHYTO_ENTRETIEN_COURS_EAU"]
		new_line["header241"] = element["PHYTO_ENTRETIEN_COURS_EAU_COMMENT"]
		new_line["header242"] = element["PHYTO_FREQ_IFT_CONNAISSANCE"]
		new_line["header243"] = element["PHYTO_FREQ_IFT_CALCUL"]
		new_line["header244"] = element["PHYTO_FREQ_IFT_RQ"]
		new_line["header245"] = element["PHYTO_SECU_VERIFICATION_DONNEES_TOXICO"]
		new_line["header246"] = element["PHYTO_SECU_CONNAISSANCE_RISQUE"]
		new_line["header247"] = ParseInt_Survea(element["PHYTO_SECU_QUI_REALISE_TRAITEMENT_V_CHEF_EXPLOITATION_ASSOCIE"])
		new_line["header248"] = ParseInt_Survea(element["PHYTO_SECU_QUI_REALISE_TRAITEMENT_V_AUTRE_SALARIES"])
		new_line["header249"] = ParseInt_Survea(element["PHYTO_SECU_QUI_REALISE_TRAITEMENT_V_PRESTATAIRE_QUALIFIE"])
		new_line["header250"] = element["PHYTO_SECU_PRESTATAIRE_POUR_AUTRES_EXPLOITANTS"]
		new_line["header251"] = element["PHYTO_SECU_TRAITEMENT_COMMENTAIRE"]
		new_line["header252"] = element["PHYTO_SECU_TITULAIRES_CERTIPHYTO"]
		new_line["header253"] = element["PHYTO_SECU_TITULAIRES_CERTIPHYTO_OBTENIR"]
		new_line["header254"] = element["PHYTO_SECU_TITULAIRES_CERTIPHYTO_QUAND"]
		new_line["header255"] = element["PHYTO_SECU_TITULAIRES_CERTIPHYTO_COMMENT"]
		new_line["header256"] = element["PHYTO_SECU_AUTRE_FORMATION"]
		new_line["header257"] = element["PHYTO_SECU_AUTRE_FORMATION_TYPE_COMMENTAIRE"]
		new_line["header258"] = element["PHYTO_SECU_CONNAISSANCE_TRANSFERT_VERS_EAU"]
		new_line["header259"] = element["PHYTO_SECU_COMMENTAIRE"]
		new_line["header260"] = element["PHYTO_SECU_INTERET_PROBLEM_IMPACT_SANTE_ENVIRONNEMENT"]
		new_line["header261"] = ParseInt_Survea(element["PHYTO_TRAIT_APPLI_PULVERISATEUR_AGE_V_MOINS_10_ANS"])
		new_line["header262"] = ParseInt_Survea(element["PHYTO_TRAIT_APPLI_PULVERISATEUR_AGE_V_PLUS_10_ANS"])
		new_line["header263"] = element["PHYTO_TRAIT_APPLI_PULVERISATEUR_VOLUME"]
		new_line["header264"] = element["PHYTO_TRAIT_APPLI_BUSES_ANTI_DERIVE"]
		new_line["header265"] = element["PHYTO_TRAIT_APPLI_BUSES_ANTI_DERIVE_TRAITEMENTS"]
		new_line["header266"] = element["PHYTO_TRAIT_APPLI_BUSES_ANTI_DERIVEPARCELLES"]
		new_line["header267"] = element["PHYTO_TRAIT_APPLI_BUSES_ANTI_DERIVE_RAISONS"]
		new_line["header268"] = element["PHYTO_TRAIT_APPLI_PULVERISATEUR_REGLAGES/ORIENTATION_BUSESDIFFUSEURS"]
		new_line["header269"] = element["PHYTO_TRAIT_APPLI_PULVERISATEUR_REGLAGES/POSITIONNEMENT_TRAITEMENT_ZONE_FRUCTIFERE"]
		new_line["header270"] = element["PHYTO_TRAIT_APPLI_PULVERISATEUR_REGLAGES/COUPURE_DIFFUSEURS_NON_ORIENTES_VERS_VEGETATION"]
		new_line["header271"] = element["PHYTO_TRAIT_APPLI_PULVERISATEUR_REGLAGES/ESTIMATION_VITESSE_AVANCEMENT"]
		new_line["header272"] = element["PHYTO_TRAIT_APPLI_PULVERISATEUR_REGLAGES/ESTIMATION_DEBIT"]
		new_line["header273"] = element["PHYTO_TRAIT_APPLI_FREQUENCE"]
		new_line["header274"] = element["PHYTO_TRAIT_APPLI_MOMENT_ANNEE"]
		new_line["header275"] = element["PHYTO_TRAIT_APPLI_REGLAGES_QUI"]
		new_line["header276"] = ParseInt_Survea(element["PHYTO_TRAIT_PREP_BOUILLIE_LIEU_PREPARATION_V_SIEGE_EXTERIEUR"])
		new_line["header277"] = ParseInt_Survea(element["PHYTO_TRAIT_PREP_BOUILLIE_LIEU_PREPARATION_V_SIEGE_SOUS_ABRI"])
		new_line["header278"] = ParseInt_Survea(element["PHYTO_TRAIT_PREP_BOUILLIE_LIEU_PREPARATION_V_A_LA_PARCELLE"])
		new_line["header279"] = ParseInt_Survea(element["PHYTO_TRAIT_PREP_LIEU_REMPLISSAGE_V_SIEGE_EXTERIEUR"])
		new_line["header280"] = ParseInt_Survea(element["PHYTO_TRAIT_PREP_LIEU_REMPLISSAGE_V_SIEGE_SOUS_ABRI"])
		new_line["header281"] = ParseInt_Survea(element["PHYTO_TRAIT_PREP_LIEU_REMPLISSAGE_V_A_LA_PARCELLE"])
		new_line["header282"] = element["PHYTO_TRAIT_PREP_LIEU_REMPLISSAGE_IDEM_BOUILLIE"]
		new_line["header283"] = element["PHYTO_TRAIT_PREP_CONTROLE_REMPLISSAGE"]
		new_line["header284"] = element["PHYTO_TRAIT_PREP_CONTROLE_REMPLISSAGE_OTHER"]
		new_line["header285"] = element["PHYTO_TRAIT_PREP_ORIGINE_EAU_REMPLISSAGE"]
		new_line["header286"] = element["PHYTO_TRAIT_PREP_DISPOSITIF_ANTI_RETOUR_EAU"]
		new_line["header287"] = element["PHYTO_TRAIT_PREP_DESC_DISPOSITIF"]
		new_line["header288"] = element["PHYTO_TRAIT_PREP_VOLUME_CUVE"]
		new_line["header289"] = element["PHYTO_TRAIT_PREP_REMPL_AIRE_EXISTE"]
		new_line["header290"] = element["PHYTO_TRAIT_PREP_REMPL_AIRE_SOL"]
		new_line["header291"] = element["PHYTO_TRAIT_PREP_REMPL_AMENAGEMENT_POSSIBLE"]
		new_line["header292"] = element["PHYTO_TRAIT_PREP_REMPL_AMENAGEMENT_POSSIBLE_DESC"]
		new_line["header293"] = element["PHYTO_TRAIT_PREP_REMPL_DEBORDEMENT_CUVE_OU_VA_BOUILLIE"]
		new_line["header294"] = element["PHYTO_TRAIT_PREP_REMPL_DEBORDEMENT_CUVE_OU_VA_BOUILLIE_OTHER"]
		new_line["header295"] = ParseInt_Survea(element["PHYTO_TRAIT_PREP_BOUILLIE_VOLUME_V_CALCUL_EXACT"])
		new_line["header296"] = ParseInt_Survea(element["PHYTO_TRAIT_PREP_BOUILLIE_VOLUME_V_PLUTOT_PLUS_BESOIN"])
		new_line["header297"] = ParseInt_Survea(element["PHYTO_TRAIT_PREP_BOUILLIE_VOLUME_V_PLUTOT_MOINS_BESOIN"])
		new_line["header298"] = element["PHYTO_TRAIT_PREP_POURCENTAGE_VOLUME_EXACT"]
		new_line["header299"] = element["PHYTO_TRAIT_PREP_REMPL_RINCAGE_BIDONS_EXISTE"]
		new_line["header300"] = ParseInt_Survea(element["PHYTO_TRAIT_PREP_REMPL_RINCAGE_BIDONS_LIEU_V_SIEGE_EXTERIEUR"])
		new_line["header301"] = ParseInt_Survea(element["PHYTO_TRAIT_PREP_REMPL_RINCAGE_BIDONS_LIEU_V_SIEGE_SOUS_ABRI"])
		new_line["header302"] = ParseInt_Survea(element["PHYTO_TRAIT_PREP_REMPL_RINCAGE_BIDONS_LIEU_V_A_LA_PARCELLE"])
		new_line["header303"] = element["PHYTO_VIDAN_RINCAGE_FIN_TRAITEMENT"]
		new_line["header304"] = element["PHYTO_VIDAN_RINCAGE_FIN_TRAITEMENT_RQ"]
		new_line["header305"] = ParseInt_Survea(element["PHYTO_VIDAN_RINCAGE_CUVE_LIEU_V_SIEGE"])
		new_line["header306"] = ParseInt_Survea(element["PHYTO_VIDAN_RINCAGE_CUVE_LIEU_V_PARCELLE"])
		new_line["header307"] = ParseInt_Survea(element["PHYTO_VIDAN_RINCAGE_CUVE_LIEU_V_AUTRE"])
		new_line["header308"] = element["PHYTO_VIDAN_RINCAGE_CUVE_LIEU_OTHER"]
		new_line["header309"] = element["PHYTO_VIDAN_RINCAGE_CUVE_EXISTE"]
		new_line["header310"] = element["PHYTO_VIDAN_RINCAGE_CUVE_VOLUME"]
		new_line["header311"] = element["PHYTO_VIDAN_VIDANGE_FOND_CUVE_AVANT_RINCAGE"]
		new_line["header312"] = element["PHYTO_VIDAN_VIDANGE_VOLUME_FOND_CUVE_CONNU"]
		new_line["header313"] = element["PHYTO_VIDAN_VIDANGE_VOLUME_FOND_CUVE_EVAL"]
		new_line["header314"] = ParseInt_Survea(element["PHYTO_VIDAN_VIDANGE_FOND_CUVE_LIEU_V_SIEGE"])
		new_line["header315"] = ParseInt_Survea(element["PHYTO_VIDAN_VIDANGE_FOND_CUVE_LIEU_V_PARCELLE"])
		new_line["header316"] = ParseInt_Survea(element["PHYTO_VIDAN_VIDANGE_FOND_CUVE_LIEU_V_AUTRE"])
		new_line["header317"] = element["PHYTO_VIDAN_VIDANGE_FOND_CUVE_LIEU_OTHER"]
		new_line["header318"] = ParseInt_Survea(element["PHYTO_VIDAN_SIEGE_EAUX_RINCAGE_DESTINATION_V_EGOUT_FOSSE"])
		new_line["header319"] = ParseInt_Survea(element["PHYTO_VIDAN_SIEGE_EAUX_RINCAGE_DESTINATION_V_BAC_RECUP"])
		new_line["header320"] = ParseInt_Survea(element["PHYTO_VIDAN_SIEGE_EAUX_RINCAGE_DESTINATION_V_CUVE_PULVERISATEUR"])
		new_line["header321"] = ParseInt_Survea(element["PHYTO_VIDAN_SIEGE_EAUX_RINCAGE_DESTINATION_V_STOCK_SANS_TRAITEMENT"])
		new_line["header322"] = ParseInt_Survea(element["PHYTO_VIDAN_SIEGE_EAUX_RINCAGE_DESTINATION_V_TRAITEES_PROCEDE_AGREE"])
		new_line["header323"] = ParseInt_Survea(element["PHYTO_VIDAN_SIEGE_EAUX_RINCAGE_DESTINATION_V_STOCK_PUIS_ELIMINEES"])
		new_line["header324"] = ParseInt_Survea(element["PHYTO_VIDAN_FOND_CUVE_SIEGE_VOLUME_DESTINATION_V_VIDANGE_EGOUT_FOSSE"])
		new_line["header325"] = ParseInt_Survea(element["PHYTO_VIDAN_FOND_CUVE_SIEGE_VOLUME_DESTINATION_V_VIDANGE_COUR_FERME"])
		new_line["header326"] = ParseInt_Survea(element["PHYTO_VIDAN_FOND_CUVE_SIEGE_VOLUME_DESTINATION_V_VIDANGE_AIRE_ENHERBE"])
		new_line["header327"] = ParseInt_Survea(element["PHYTO_VIDAN_FOND_CUVE_SIEGE_VOLUME_DESTINATION_V_RECUPERATION"])
		new_line["header328"] = ParseInt_Survea(element["PHYTO_VIDAN_FOND_CUVE_SIEGE_VOLUME_DESTINATION_V_AUTRE"])
		new_line["header329"] = element["PHYTO_VIDAN_FOND_CUVE_SIEGE_VOLUME_DESTINATION_OTHER"]
		new_line["header330"] = element["PHYTO_VIDAN_FOND_CUVE_SIEGE_LIEU_RESPECTE_REGLT"]
		new_line["header331"] = element["PHYTO_VIDAN_FOND_CUVE_PARC_RINCAGE_EFFECTUE_DANS_PARCELLE"]
		new_line["header332"] = element["PHYTO_VIDAN_FOND_CUVE_PARC_METHODE_RINCAGE"]
		new_line["header333"] = element["PHYTO_VIDAN_LAVAGE_PULV_EXTERIEUR"]
		new_line["header334"] = ParseInt_Survea(element["PHYTO_VIDAN_LAVAGE_PULV_PULVERISATEUR_LIEU_LAVAGE_V_SIEGE"])
		new_line["header335"] = ParseInt_Survea(element["PHYTO_VIDAN_LAVAGE_PULV_PULVERISATEUR_LIEU_LAVAGE_V_PARCELLE"])
		new_line["header336"] = ParseInt_Survea(element["PHYTO_VIDAN_LAVAGE_PULV_PULVERISATEUR_LIEU_LAVAGE_V_AUTRE"])
		new_line["header337"] = element["PHYTO_VIDAN_LAVAGE_PULV_PULVERISATEUR_LIEU_LAVAGE_OTHER"]
		new_line["header338"] = element["PHYTO_VIDAN_LAVAGE_PULV_SIEGE_AIRE_ETANCHE"]
		new_line["header339"] = element["PHYTO_VIDAN_LAVAGE_PULV_SIEGE_SEPAR_EAUX_PLUVIALES"]
		new_line["header340"] = element["PHYTO_VIDAN_LAVAGE_PULV_SIEGE_PRESENCE_DECANTEUR_SEPARATEUR"]
		new_line["header341"] = ParseInt_Survea(element["PHYTO_VIDAN_LAVAGE_PULV_SIEGE_DESTINATION_EAUX_LAVAGE_V_STOCK_SANS_TRAITEMENT"])
		new_line["header342"] = ParseInt_Survea(element["PHYTO_VIDAN_LAVAGE_PULV_SIEGE_DESTINATION_EAUX_LAVAGE_V_TRAITEES_PROCEDE_AGREE"])
		new_line["header343"] = ParseInt_Survea(element["PHYTO_VIDAN_LAVAGE_PULV_SIEGE_DESTINATION_EAUX_LAVAGE_V_STOCK_PUIS_ELIMINEES"])
		new_line["header344"] = element["PHYTO_VIDAN_LAVAGE_PULV_SIEGE_APRES_RINCAGE_INTERIEUR_CUVE"]
		new_line["header345"] = ParseInt_Survea(element["PHYTO_VIDAN_LAVAGE_PULV_SIEGE_DEVENIR_EFFLUENTS_LIQ_V_TRAITES_HOMOLOGUE"])
		new_line["header346"] = ParseInt_Survea(element["PHYTO_VIDAN_LAVAGE_PULV_SIEGE_DEVENIR_EFFLUENTS_LIQ_V_PHYTOBAC"])
		new_line["header347"] = ParseInt_Survea(element["PHYTO_VIDAN_LAVAGE_PULV_SIEGE_DEVENIR_EFFLUENTS_LIQ_V_EVAPOPHYT"])
		new_line["header348"] = ParseInt_Survea(element["PHYTO_VIDAN_LAVAGE_PULV_SIEGE_DEVENIR_EFFLUENTS_LIQ_V_OSMOFILM"])
		new_line["header349"] = ParseInt_Survea(element["PHYTO_VIDAN_LAVAGE_PULV_SIEGE_DEVENIR_EFFLUENTS_LIQ_V_HELIOSEC"])
		new_line["header350"] = ParseInt_Survea(element["PHYTO_VIDAN_LAVAGE_PULV_SIEGE_DEVENIR_EFFLUENTS_LIQ_V_PHYTOPUR"])
		new_line["header351"] = ParseInt_Survea(element["PHYTO_VIDAN_LAVAGE_PULV_SIEGE_DEVENIR_EFFLUENTS_LIQ_V_SENTINEL"])
		new_line["header352"] = ParseInt_Survea(element["PHYTO_VIDAN_LAVAGE_PULV_SIEGE_DEVENIR_EFFLUENTS_LIQ_V_STOCK_PUIS_ELIMINES"])
		new_line["header353"] = ParseInt_Survea(element["PHYTO_VIDAN_LAVAGE_PULV_SIEGE_DEVENIR_EFFLUENTS_LIQ_V_NON_CONCERNE"])
		new_line["header354"] = ParseInt_Survea(element["PHYTO_VIDAN_LAVAGE_PULV_SIEGE_DEVENIR_EFFLUENTS_LIQ_V_AUTRE"])
		new_line["header355"] = element["PHYTO_VIDAN_LAVAGE_PULV_SIEGE_DEVENIR_EFFLUENTS_LIQ_OTHER"]
		new_line["header356"] = element["SOL_TECH_L_DECHAUMAGE_O_N"]
		new_line["header357"] = element["SOL_TECH_L_DECHAUMAGE_CULTURE"]
		new_line["header358"] = element["SOL_TECH_L_DECHAUMAGE_SURFACE"]
		new_line["header359"] = element["SOL_TECH_L_DECHAUMAGE_SITUATION"]
		new_line["header360"] = element["SOL_TECH_L_DECHAUMAGE_DUREE"]
		new_line["header361"] = element["SOL_TECH_L_LABOUR_O_N"]
		new_line["header362"] = element["SOL_TECH_L_LABOUR_CULTURE"]
		new_line["header363"] = element["SOL_TECH_L_LABOUR_SURFACE"]
		new_line["header364"] = element["SOL_TECH_L_LABOUR_SITUATION"]
		new_line["header365"] = element["SOL_TECH_L_LABOUR_DUREE"]
		new_line["header366"] = element["SOL_TECH_L_LABOUR_SIMPLIFIE_O_N"]
		new_line["header367"] = element["SOL_TECH_L_LABOUR_SIMPLIFIE_CULTURE"]
		new_line["header368"] = element["SOL_TECH_L_LABOUR_SIMPLIFIE_SURFACE"]
		new_line["header369"] = element["SOL_TECH_L_LABOUR_SIMPLIFIE_SITUATION"]
		new_line["header370"] = element["SOL_TECH_L_LABOUR_SIMPLIFIE_DUREE"]
		new_line["header371"] = element["SOL_TECH_L_NON_LABOUR_O_N"]
		new_line["header372"] = element["SOL_TECH_L_NON_LABOUR_CULTURE"]
		new_line["header373"] = element["SOL_TECH_L_NON_LABOUR_SURFACE"]
		new_line["header374"] = element["SOL_TECH_L_NON_LABOUR_SITUATION"]
		new_line["header375"] = element["SOL_TECH_L_NON_LABOUR_DUREE"]
		new_line["header376"] = element["SOL_TECH_L_SEMIS_DIRECT_O_N"]
		new_line["header377"] = element["SOL_TECH_L_SEMIS_DIRECT_CULTURE"]
		new_line["header378"] = element["SOL_TECH_L_SEMIS_DIRECT_SURFACE"]
		new_line["header379"] = element["SOL_TECH_L_SEMIS_DIRECT_SITUATION"]
		new_line["header380"] = element["SOL_TECH_L_SEMIS_DIRECT_DUREE"]
		new_line["header381"] = element["SOL_TECH_L_BINAGE_O_N"]
		new_line["header382"] = element["SOL_TECH_L_BINAGE_CULTURE"]
		new_line["header383"] = element["SOL_TECH_L_BINAGE_SURFACE"]
		new_line["header384"] = element["SOL_TECH_L_BINAGE_SITUATION"]
		new_line["header385"] = element["SOL_TECH_L_BINAGE_DUREE"]
		new_line["header386"] = element["SOL_TECH_RAISON_METHODE_DESC"]
		new_line["header387"] = element["SOL_PRAIRIE_AVEZ-VOUS"]
		new_line["header388"] = element["SOL_PRAIRIE_SURFACE"]
		new_line["header389"] = element["SOL_PRAIRIE_SURFACE_DONT_ZPAAC"]
		new_line["header390"] = element["SOL_PRAIRIE_TEMPORAIRES"]
		new_line["header391"] = element["SOL_PRAIRIE_TEMPORAIRES_DONT_ZPAAC"]
		new_line["header392"] = element["SOL_PRAIRIE_PERMANENTES"]
		new_line["header393"] = element["SOL_PRAIRIE_PERMANENTES_DONT_ZPAAC"]
		new_line["header394"] = element["SOL_PRAIRIE_RETOURNEES"]
		new_line["header395"] = element["SOL_PRAIRIE_RETOURNEES_AGE"]
		new_line["header396"] = element["SOL_PRAIRIE_FERTILISEES"]
		new_line["header397"] = ParseInt_Survea(element["SOL_PRAIRIE_FERTILISEES_TYPE_V_MINERALE"])
		new_line["header398"] = ParseInt_Survea(element["SOL_PRAIRIE_FERTILISEES_TYPE_V_ORGANIQUE"])
		new_line["header399"] = element["SOL_PRAIRIE_FERTILISEES_PERIODICITE"]
		new_line["header400"] = element["SOL_PRAIRIE_DESHERBAGE"]
		new_line["header401"] = ParseInt_Survea(element["SOL_PRAIRIE_DESHERBAGE_MANIERE_V_PONCTUELLEMENT"])
		new_line["header402"] = ParseInt_Survea(element["SOL_PRAIRIE_DESHERBAGE_MANIERE_V_EN_TOTALITE"])
		new_line["header403"] = element["SOL_PRAIRIE_DESHERBAGE_PERIODICITE"]
		new_line["header404"] = element["SOL_PRAIRIE_DESHERBAGE_RQ"]
		new_line["header405"] = element["SOL_FERTI_DON_TRANSMISSION_FICHES"]
		new_line["header406"] = element["SOL_FERTI_DON_CAMPAGNE_N"]
		new_line["header407"] = element["SOL_FERTI_DON_CAMPAGNE_NM1"]
		new_line["header408"] = element["SOL_FERTI_DON_CAMPAGNE_NM2"]
		new_line["header409"] = element["SOL_PRATIQ_FERTI_AZOTEE_SUPPORT_ENREGISTREMENT/SUR_INFORMATIQUE"]
		new_line["header410"] = element["SOL_PRATIQ_FERTI_AZOTEE_SUPPORT_ENREGISTREMENT/SUR_CAHIER_EPANDAGE_FOURNI_ORGANISME_CONSEIL"]
		new_line["header411"] = element["SOL_PRATIQ_FERTI_AZOTEE_SUPPORT_ENREGISTREMENT/SUR_CAHIER_PERSONNEL"]
		new_line["header412"] = element["SOL_PRATIQ_FERTI_AZOTEE_DEFINITION_DOSE_PAR/VOUS_MEME"]
		new_line["header413"] = element["SOL_PRATIQ_FERTI_AZOTEE_DEFINITION_DOSE_PAR/UN_CONSEILLER_GDACA"]
		new_line["header414"] = element["SOL_PRATIQ_FERTI_AZOTEE_DEFINITION_DOSE_PAR/UN_CONSEILLER_COOPNEGOCE"]
		new_line["header415"] = element["SOL_PRATIQ_FERTI_AZOTEE_DEFINITION_DOSE_PAR/AUTRE"]
		new_line["header416"] = element["SOL_PRATIQ_FERTI_AZOTEE_DEFINITION_DOSE_PAR_OTHER"]
		new_line["header417"] = ParseInt_Survea(element["SOL_PRATIQ_FERTI_EPANDAGE_V_CETTE_DOSE"])
		new_line["header418"] = ParseInt_Survea(element["SOL_PRATIQ_FERTI_EPANDAGE_V_MOINS_CETTE_DOSE"])
		new_line["header419"] = ParseInt_Survea(element["SOL_PRATIQ_FERTI_EPANDAGE_V_PLUS_CETTE_DOSE"])
		new_line["header420"] = element["SOL_PRATIQ_FERTI_EPANDAGE_COMMENTAIRE"]
		new_line["header421"] = element["SOL_PRATIQ_FERTI_APPORTS_AZOTE/OBJECTIFS_QUALITE"]
		new_line["header422"] = element["SOL_PRATIQ_FERTI_APPORTS_AZOTE/OBJECTIFS_RENDEMENT"]
		new_line["header423"] = element["SOL_PRATIQ_FERTI_APPORTS_AZOTE/COMPORTEMENT_PLANTE_VIGUEUR_PRODUCTION"]
		new_line["header424"] = element["SOL_PRATIQ_FERTI_APPORTS_AZOTE/SENSIBILITE_AUX_MALADIES"]
		new_line["header425"] = element["SOL_PRATIQ_FERTI_APPORTS_AZOTE/COUT_INTRANT"]
		new_line["header426"] = element["SOL_PRATIQ_FERTI_APPORTS_AZOTE/AUTRE"]
		new_line["header427"] = element["SOL_PRATIQ_FERTI_APPORTS_AZOTE_OTHER"]
		new_line["header428"] = ParseInt_Survea(element["SOL_PRATIQ_FERTI_DOSE_PREVISIONNELLE_V_DOSES_HABITUELLES"])
		new_line["header429"] = ParseInt_Survea(element["SOL_PRATIQ_FERTI_DOSE_PREVISIONNELLE_V_PLAN_FUMURE_SIMPLIFIE"])
		new_line["header430"] = ParseInt_Survea(element["SOL_PRATIQ_FERTI_DOSE_PREVISIONNELLE_V_PLAN_FUMURE_COMPLET"])
		new_line["header431"] = ParseInt_Survea(element["SOL_PRATIQ_FERTI_NIVEAU_RENDEMENT_V_OPTIMAL_ESPERE"])
		new_line["header432"] = ParseInt_Survea(element["SOL_PRATIQ_FERTI_NIVEAU_RENDEMENT_V_OBTENU_ANNEES_PRECEDENTES"])
		new_line["header433"] = ParseInt_Survea(element["SOL_PRATIQ_FERTI_NIVEAU_RENDEMENT_V_AUTRE"])
		new_line["header434"] = element["SOL_PRATIQ_FERTI_NIVEAU_RENDEMENT_OTHER"]
		new_line["header435"] = element["SOL_PRATIQ_FERTI_NB_ANNEES_CALCUL"]
		new_line["header436"] = element["SOL_PRATIQ_FERTI_DECISION_DATE_APPORTS/EN_FONCTION_METEO"]
		new_line["header437"] = element["SOL_PRATIQ_FERTI_DECISION_DATE_APPORTS/EN_FONCTION_STADE_PLANTE"]
		new_line["header438"] = element["SOL_PRATIQ_FERTI_DECISION_DATE_APPORTS/EN_FONCTION_ETAT_BANDE_DOUBLE_DENSITE"]
		new_line["header439"] = element["SOL_PRATIQ_FERTI_DECISION_DATE_APPORTS_RQ"]
		new_line["header440"] = element["SOL_PRATIQ_FERTI_AJUSTEMENT_FUMURE_COURS_CAMPAGNE"]
		new_line["header441"] = element["SOL_PRATIQ_FERTI_AJUSTEMENT_FONCTION/DE_ASPECT_GENERAL_PARCELLES"]
		new_line["header442"] = element["SOL_PRATIQ_FERTI_AJUSTEMENT_FONCTION/DES_OUTILS_PILOTAGE_FERTILISATION_AZOTEE"]
		new_line["header443"] = ParseInt_Survea(element["SOL_PRATIQ_FERTI_AJUSTEMENT_FONCTION_OUTILS_V_N_TESTER"])
		new_line["header444"] = ParseInt_Survea(element["SOL_PRATIQ_FERTI_AJUSTEMENT_FONCTION_OUTILS_V_JUBIL"])
		new_line["header445"] = ParseInt_Survea(element["SOL_PRATIQ_FERTI_AJUSTEMENT_FONCTION_OUTILS_V_FARMSTAR"])
		new_line["header446"] = ParseInt_Survea(element["SOL_PRATIQ_FERTI_AJUSTEMENT_FONCTION_OUTILS_V_PESEE_COLZA"])
		new_line["header447"] = ParseInt_Survea(element["SOL_PRATIQ_FERTI_AJUSTEMENT_FONCTION_OUTILS_V_BANDE_DOUBLE_DENSITE"])
		new_line["header448"] = ParseInt_Survea(element["SOL_PRATIQ_FERTI_AJUSTEMENT_FONCTION_OUTILS_V_AUTRE"])
		new_line["header449"] = element["SOL_PRATIQ_FERTI_AJUSTEMENT_FONCTION_OUTILS_OTHER"]
		new_line["header450"] = element["SOL_PRATIQ_FERTI_CULTURES_CONCERNEES_OUTILS_PILOTAGE"]
		new_line["header451"] = element["SOL_PRATIQ_FERTI_SURFACE_CONCERNEE_PAR_OUTILS_PILOTAGE"]
		new_line["header452"] = element["SOL_PRATIQ_FERTI_OPINION_OUTIL_PILOTAGE"]
		new_line["header453"] = element["SOL_PRATIQ_FERTI_INTERET_MISE_EN_PLACE_OUTIL_PILOTAGE"]
		new_line["header454"] = element["SOL_PRATIQ_FERTI_INTERET_MISE_EN_PLACE_OUTIL_PILOTAGE_LEQUEL"]
		new_line["header455"] = element["SOL_PRATIQ_FERTI_INTERET_MISE_EN_PLACE_OUTIL_PILOTAGE_POURQUOI"]
		new_line["header456"] = element["SOL_PRATIQ_FERTI_EPANDAGE_ENGRAIS_ORGANIQUES"]
		new_line["header457"] = ParseInt_Survea(element["SOL_TONNAGE_EFFL_FUMIER_PROVENANCE_V_IMPORTES"])
		new_line["header458"] = ParseInt_Survea(element["SOL_TONNAGE_EFFL_FUMIER_PROVENANCE_V_PRODUITS_EXPLOITATION"])
		new_line["header459"] = element["SOL_TONNAGE_EFFL_FUMIER_QUANTITE"]
		new_line["header460"] = ParseInt_Survea(element["SOL_TONNAGE_EFFL_LISIER_PROVENANCE_V_IMPORTES"])
		new_line["header461"] = ParseInt_Survea(element["SOL_TONNAGE_EFFL_LISIER_PROVENANCE_V_PRODUITS_EXPLOITATION"])
		new_line["header462"] = element["SOL_TONNAGE_EFFL_LISIER_QUANTITE"]
		new_line["header463"] = ParseInt_Survea(element["SOL_TONNAGE_EFFL_PURIN_CULTURE_V_IMPORTES"])
		new_line["header464"] = ParseInt_Survea(element["SOL_TONNAGE_EFFL_PURIN_CULTURE_V_PRODUITS_EXPLOITATION"])
		new_line["header465"] = element["SOL_TONNAGE_EFFL_PURIN_QUANTITE"]
		new_line["header466"] = ParseInt_Survea(element["SOL_TONNAGE_EFFL_AUTRES_PROD_ORGA_CULTURE_V_IMPORTES"])
		new_line["header467"] = ParseInt_Survea(element["SOL_TONNAGE_EFFL_AUTRES_PROD_ORGA_CULTURE_V_PRODUITS_EXPLOITATION"])
		new_line["header468"] = element["SOL_TONNAGE_EFFL_AUTRES_PROD_ORGA_QUANTITE"]
		new_line["header469"] = element["SOL_TONNAGE_EFFL_AUTRES_PROD_ORGA_COMMENTAIRE"]
		new_line["header470"] = ParseInt_Survea(element["SOL_TONNAGE_EFFL_FIENTES_CULTURE_V_IMPORTES"])
		new_line["header471"] = ParseInt_Survea(element["SOL_TONNAGE_EFFL_FIENTES_CULTURE_V_PRODUITS_EXPLOITATION"])
		new_line["header472"] = element["SOL_TONNAGE_EFFL_FIENTES_QUANTITE"]
		new_line["header473"] = ParseInt_Survea(element["SOL_TONNAGE_EFFL_COMPOSTS_CULTURE_V_IMPORTES"])
		new_line["header474"] = ParseInt_Survea(element["SOL_TONNAGE_EFFL_COMPOSTS_CULTURE_V_PRODUITS_EXPLOITATION"])
		new_line["header475"] = element["SOL_TONNAGE_EFFL_COMPOSTS_QUANTITE"]
		new_line["header476"] = element["SOL_TONNAGE_EFFL_COMMENTAIRE"]
		new_line["header477"] = element["SOL_EPANDAGE_ANALYSE_EFFLUENT_REALISATION"]
		new_line["header478"] = element["SOL_EPANDAGE_ANALYSE_EFFLUENT_LESQUELS"]
		new_line["header479"] = element["SOL_EPANDAGE_ANALYSE_EFFLUENT_QUAND"]
		new_line["header480"] = element["SOL_EPANDAGE_ANALYSE_EFFLUENT_TYPE_ANALYSE"]
		new_line["header481"] = element["SOL_EPANDAGE_MODIFICATION_ATELIER_ANIMAL"]
		new_line["header482"] = element["SOL_EPANDAGE_CONNAISSANCE_DOSE_EPANDUE"]
		new_line["header483"] = element["SOL_EPANDAGE_REALISATION_PESEE_EPANDEUR"]
		new_line["header484"] = element["SOL_EPANDAGE_INTERET_ANALYSE_PESEE"]
		new_line["header485"] = element["SOL_EPAND_AZOTE_ENGRAIS_COMPLETS_N_K_P"]
		new_line["header486"] = element["SOL_EPAND_AZOTE_ENGRAIS_FONDS_P_K_ETC"]
		new_line["header487"] = element["SOL_EPAND_AZOTE_ENGRAIS_RQ"]
		new_line["header488"] = element["SOL_EPAND_AZOTE_RELIQ_MESURES"]
		new_line["header489"] = element["SOL_EPAND_AZOTE_RELIQ_MESURES_QUAND"]
		new_line["header490"] = element["SOL_EPAND_AZOTE_RELIQ_MESURES_TOTALITE_ILOTS"]
		new_line["header491"] = element["SOL_EPAND_AZOTE_RELIQ_MESURES_SUR_PARCELLES_ZPAAC"]
		new_line["header492"] = element["SOL_EPAND_AZOTE_RELIQ_MESURES_TOTALITE_CULTURES"]
		new_line["header493"] = element["SOL_EPAND_AZOTE_RELIQ_MESURES_COMBIEN"]
		new_line["header494"] = element["SOL_EPAND_AZOTE_RELIQ_MESURES_FREQUENCE"]
		new_line["header495"] = element["SOL_EPAND_AZOTE_RELIQ_MESURES_REALISATION_QUI"]
		new_line["header496"] = element["SOL_EPAND_AZOTE_RELIQ_MESURES_COMMUNICATION_O_N"]
		new_line["header497"] = element["SOL_EPAND_AZOTE_BILAN_POST_RECOLTE_OU_CORPEN"]
		new_line["header498"] = element["SOL_EPAND_AZOTE_BILAN_COMMUNICATION_O_N"]
		new_line["header499"] = element["SOL_EPAND_AZOTE_ANALYSE_SOL_REALISATION"]
		new_line["header500"] = element["SOL_EPAND_AZOTE_ANALYSE_SOL_SUR_PARCELLES_ZPAAC"]
		new_line["header501"] = element["SOL_EPAND_AZOTE_ANALYSE_SOL_SUR_PARCELLES_ZPAAC_LESQUELLES"]
		new_line["header502"] = element["SOL_EPAND_AZOTE_ANALYSE_SOL_PAR_QUI"]
		new_line["header503"] = element["SOL_EPAND_AZOTE_ANALYSE_SOL_COMMUNICATION_O_N"]
		new_line["header504"] = element["SOL_EPAND_AZOTE_DOC_REFER_UTILISATION"]
		new_line["header505"] = element["SOL_EPAND_AZOTE_DOC_REFER_LESQUELS"]
		new_line["header506"] = element["SOL_FOURNISSEUR_AZOTE_QUI"]
		new_line["header507"] = element["SOL_FOURNISSEUR_AZOTE_RQ"]
		new_line["header508"] = element["SOL_SURF_INTER_CULT_CA_NM2"]
		new_line["header509"] = element["SOL_SURF_INTER_CULT_CA_NM1"]
		new_line["header510"] = element["SOL_SURF_INTER_CULT_CA_N"]
		new_line["header511"] = element["SOL_SURF_INTER_CULT_CA_RQ"]
		new_line["header512"] = element["SOL_SURF_INTER_CULT_ZPAAC_CA_N"]
		new_line["header513"] = element["SOL_SURF_INTER_CULT_ZPAAC_CA_NM1"]
		new_line["header514"] = element["SOL_SURF_INTER_CULT_ZPAAC_CA_NM2"]
		new_line["header515"] = element["SOL_SURF_INTER_CULT_ZPAAC_CA_RQ"]
		new_line["header516"] = element["SOL_ENGRAIS_VERT_CULTURE_PRECEDENTE"]
		new_line["header517"] = element["SOL_ENGRAIS_VERT_TYPE_CIPAN"]
		new_line["header518"] = element["SOL_ENGRAIS_VERT_SURFACE"]
		new_line["header519"] = element["SOL_ENGRAIS_VERT_DATE_SEMIS"]
		new_line["header520"] = element["SOL_ENGRAIS_VERT_FERTILISATION"]
		new_line["header521"] = element["SOL_ENGRAIS_VERT_DATE_DESTRUCTION"]
		new_line["header522"] = element["SOL_ENGRAIS_VERT_MODE_DESTRUCTION/GEL"]
		new_line["header523"] = element["SOL_ENGRAIS_VERT_MODE_DESTRUCTION/MECANIQUE"]
		new_line["header524"] = element["SOL_ENGRAIS_VERT_DESTRUCTION_MECA/BROYAGE"]
		new_line["header525"] = element["SOL_ENGRAIS_VERT_DESTRUCTION_MECA/ENFOUISSEMENT"]
		new_line["header526"] = element["SOL_ENGRAIS_VERT_DESTRUCTION_MECA/AUTRE"]
		new_line["header527"] = element["SOL_ENGRAIS_VERT_DESTRUCTION_MECA_OTHER"]
		new_line["header528"] = element["SOL_ENGRAIS_VERT_MODE_DESTRUCTION/CHIMIQUE"]
		new_line["header529"] = element["SOL_ENGRAIS_VERT_PRODUIT_CHIMIQUE"]
		new_line["header530"] = element["SOL_ENGRAIS_VERT_DOSE_PRODUIT_CHIMIQUE"]
		new_line["header531"] = element["SOL_ENGRAIS_VERT_COMMENTAIRE_DESTRUCTION"]
		new_line["header532"] = element["SOL_ENGRAIS_VERT_CULTURE_SUIVANTE"]
		new_line["header533"] = element["SOL_CIPAN_ADAPTATION"]
		new_line["header534"] = element["ANI_PROD_CHEPTEL_BOVIN_VACHE_LAIT_EFF"]
		new_line["header535"] = element["ANI_PROD_CHEPTEL_BOVIN_VACHE_ALL_EFF"]
		new_line["header536"] = element["ANI_PROD_CHEPTEL_BOVIN_MALE_P2ANS_EFF"]
		new_line["header537"] = element["ANI_PROD_CHEPTEL_BOVIN_GENI_M1AN_EFF"]
		new_line["header538"] = element["ANI_PROD_CHEPTEL_BOVIN_GEN_1A20_EFF"]
		new_line["header539"] = element["ANI_PROD_CHEPTEL_BOVIN_VIAND_M1AN_EFF"]
		new_line["header540"] = element["ANI_PROD_CHEPTEL_BOVIN_VIAND_1A2_EFF"]
		new_line["header541"] = element["ANI_PROD_CHEPTEL_BOVIN_VEAU_0A3MOIS_EFF"]
		new_line["header542"] = element["ANI_PROD_CHEPTEL_BOVIN_AUTRE_EFF"]
		new_line["header543"] = element["ANI_PROD_CHEPTEL_OVINS_MERE_EFF"]
		new_line["header544"] = element["ANI_PROD_CHEPTEL_OVINS_JEUNE_EFF"]
		new_line["header545"] = element["ANI_PROD_CHEPTEL_OVINS_AUTRE_EFF"]
		new_line["header546"] = element["ANI_PROD_CHEPTEL_PORCI_TRUIE_VERRAT_EFF"]
		new_line["header547"] = element["ANI_PROD_CHEPTEL_PORCI_PORCELET_EFF"]
		new_line["header548"] = element["ANI_PROD_CHEPTEL_PORCI_CHARCUT_P30KG_EFF"]
		new_line["header549"] = element["ANI_PROD_CHEPTEL_VOLAI_CHAIR_EFF"]
		new_line["header550"] = element["ANI_PROD_CHEPTEL_VOLAI_POULE_POND_EFF"]
		new_line["header551"] = element["ANI_PROD_CHEPTEL_VOLAI_AUTRE_EFF"]
		new_line["header552"] = element["ANI_PROD_CHEPTEL_BOVIN_VACHE_LAIT_BATI"]
		new_line["header553"] = element["ANI_PROD_CHEPTEL_BOVIN_VACHE_ALL_BATI"]
		new_line["header554"] = element["ANI_PROD_CHEPTEL_BOVIN_MALE_P2ANS_BATI"]
		new_line["header555"] = element["ANI_PROD_CHEPTEL_BOVIN_GENI_M1AN_BATI"]
		new_line["header556"] = element["ANI_PROD_CHEPTEL_BOVIN_GEN_1A20_BATI"]
		new_line["header557"] = element["ANI_PROD_CHEPTEL_BOVIN_VIAND_M1AN_BATI"]
		new_line["header558"] = element["ANI_PROD_CHEPTEL_BOVIN_VIAND_1A2_BATI"]
		new_line["header559"] = element["ANI_PROD_CHEPTEL_BOVIN_VEAU_0A3MOIS_BATI"]
		new_line["header560"] = element["ANI_PROD_CHEPTEL_BOVIN_AUTRE_BATI"]
		new_line["header561"] = element["ANI_PROD_CHEPTEL_OVINS_MERE_BATI"]
		new_line["header562"] = element["ANI_PROD_CHEPTEL_OVINS_JEUNE_BATI"]
		new_line["header563"] = element["ANI_PROD_CHEPTEL_OVINS_AUTRE_BATI"]
		new_line["header564"] = element["ANI_PROD_CHEPTEL_PORCI_TRUIE_VERRAT_BATI"]
		new_line["header565"] = element["ANI_PROD_CHEPTEL_PORCI_PORCELET_BATI"]
		new_line["header566"] = element["ANI_PROD_CHEPTEL_PORCI_CHARCUT_P30KG_BATI"]
		new_line["header567"] = element["ANI_PROD_CHEPTEL_VOLAI_CHAIR_BATI"]
		new_line["header568"] = element["ANI_PROD_CHEPTEL_VOLAI_POULE_POND_BATI"]
		new_line["header569"] = element["ANI_PROD_CHEPTEL_VOLAI_AUTRE_BATI"]
		new_line["header570"] = element["ANI_PROD_CHEPTEL_BOVIN_VACHE_LAIT_TPS"]
		new_line["header571"] = element["ANI_PROD_CHEPTEL_BOVIN_VACHE_ALL_TPS"]
		new_line["header572"] = element["ANI_PROD_CHEPTEL_BOVIN_MALE_P2ANS_TPS"]
		new_line["header573"] = element["ANI_PROD_CHEPTEL_BOVIN_GENI_M1AN_TPS"]
		new_line["header574"] = element["ANI_PROD_CHEPTEL_BOVIN_GEN_1A20_TPS"]
		new_line["header575"] = element["ANI_PROD_CHEPTEL_BOVIN_VIAND_M1AN_TPS"]
		new_line["header576"] = element["ANI_PROD_CHEPTEL_BOVIN_VIAND_1A2_TPS"]
		new_line["header577"] = element["ANI_PROD_CHEPTEL_BOVIN_VEAU_0A3MOIS_TPS"]
		new_line["header578"] = element["ANI_PROD_CHEPTEL_BOVIN_AUTRE_TPS"]
		new_line["header579"] = element["ANI_PROD_CHEPTEL_OVINS_MERE_TPS"]
		new_line["header580"] = element["ANI_PROD_CHEPTEL_OVINS_JEUNE_TPS"]
		new_line["header581"] = element["ANI_PROD_CHEPTEL_OVINS_AUTRE_TPS"]
		new_line["header582"] = element["ANI_PROD_CHEPTEL_PORCI_TRUIE_VERRAT_TPS"]
		new_line["header583"] = element["ANI_PROD_CHEPTEL_PORCI_PORCELET_TPS"]
		new_line["header584"] = element["ANI_PROD_CHEPTEL_PORCI_CHARCUT_P30KG_TPS"]
		new_line["header585"] = element["ANI_PROD_CHEPTEL_VOLAI_CHAIR_TPS"]
		new_line["header586"] = element["ANI_PROD_CHEPTEL_VOLAI_POULE_POND_TPS"]
		new_line["header587"] = element["ANI_PROD_CHEPTEL_VOLAI_AUTRE_TPS"]
		new_line["header588"] = element["ANI_PROD_SURF_FOURR_PRAIRIE_TEMP_SURFACE_HA"]
		new_line["header589"] = element["ANI_PROD_SURF_FOURR_PRAIRIE_TEMP_DESTINATION/ENSILAGE"]
		new_line["header590"] = element["ANI_PROD_SURF_FOURR_PRAIRIE_TEMP_DESTINATION/PATURAGE"]
		new_line["header591"] = element["ANI_PROD_SURF_FOURR_PRAIRIE_TEMP_DESTINATION/ENRUBANNAGE"]
		new_line["header592"] = element["ANI_PROD_SURF_FOURR_PRAIRIE_TEMP_DESTINATION/FOIN"]
		new_line["header593"] = element["ANI_PROD_SURF_FOURR_PRAIRIE_TEMP_NOMBRE_FAUCHES"]
		new_line["header594"] = element["ANI_PROD_SURF_FOURR_PRAIRIE_TEMP_TAUX_CHARGEMENT"]
		new_line["header595"] = element["ANI_PROD_SURF_FOURR_PRAIRIE_PERMA_SURFACE_HA"]
		new_line["header596"] = element["ANI_PROD_SURF_FOURR_PRAIRIE_PERMA_DESTINATION/ENSILAGE"]
		new_line["header597"] = element["ANI_PROD_SURF_FOURR_PRAIRIE_PERMA_DESTINATION/PATURAGE"]
		new_line["header598"] = element["ANI_PROD_SURF_FOURR_PRAIRIE_PERMA_DESTINATION/ENRUBANNAGE"]
		new_line["header599"] = element["ANI_PROD_SURF_FOURR_PRAIRIE_PERMA_DESTINATION/FOIN"]
		new_line["header600"] = element["ANI_PROD_SURF_FOURR_PRAIRIE_PERMA_TAUX_CHARGEMENT"]
		new_line["header601"] = element["ANI_PROD_SURF_FOURR_PRAIRIE_PERMA_NOMBRE_FAUCHES"]
		new_line["header602"] = element["ANI_PROD_SURF_FOURR_PRAIRIE_COMMENTAIRE"]
		new_line["header603"] = element["ANI_PROD_EFFLUENT_STOCK_O_N"]
		new_line["header604"] = element["ANI_PROD_EFFLUENT_STOCK_CHAMP_O_N"]
		new_line["header605"] = element["ANI_PROD_EFFLUENT_STOCK_CHAMP_SUR_ZPAAC"]
		new_line["header606"] = element["ANI_PROD_EFFLUENT_STOCK_CHAMP_TYPE_EFFLUENT"]
		new_line["header607"] = element["ANI_PROD_EFFLUENT_STOCK_CHAMP_AGE_EFFLUENT"]
		new_line["header608"] = element["ANI_PROD_EFFLUENT_STOCK_CHAMP_DUREE_STOCKAGE"]
		new_line["header609"] = element["ANI_PROD_EFFLUENT_STOCK_CHAMP_SUR_ZPAAC_ILOTS"]
		new_line["header610"] = element["ANI_PROD_EFFLUENT_SOUS_ANIMAUX_TEMPS_PRESENCE"]
		new_line["header611"] = element["DEBOUCHE_QUELS"]
		new_line["header612"] = element["DEBOUCHE_REMARQUE"]
		new_line["header613"] = element["DEBOUCHE_CONTRATS"]
		new_line["header614"] = element["DEBOUCHE_CONTRATS_LESQUELS/TAUX_PROTEINES"]
		new_line["header615"] = element["DEBOUCHE_CONTRATS_LESQUELS/PRODUCTION_SEMENCES"]
		new_line["header616"] = element["DEBOUCHE_CONTRATS_LESQUELS/MAC_CAIN"]
		new_line["header617"] = element["DEBOUCHE_CONTRATS_LESQUELS/AUTRE"]
		new_line["header618"] = element["DEBOUCHE_CONTRATS_LESQUELS_OTHER"]
		new_line["header619"] = element["ACTION_EXPLOI_ENVIRONMT_DEMARCHE_CONTRACTUALISEE_O_N"]
		new_line["header620"] = element["ACTION_EXPLOI_ENVIRONMT_DEMARCHE_CONTRACTUALISEE/MAE_MESURE_AGRO_ENVIRONNEMENTALE"]
		new_line["header621"] = element["ACTION_EXPLOI_ENVIRONMT_DEMARCHE_CONTRACTUALISEE/CTE_CONTRAT_TERRITORIAL_EXPLOITATION"]
		new_line["header622"] = element["ACTION_EXPLOI_ENVIRONMT_DEMARCHE_CONTRACTUALISEE/CAD_CONTRAT_AGRICULTURE_DURABLE"]
		new_line["header623"] = element["ACTION_EXPLOI_ENVIRONMT_DEMARCHE_CONTRACTUALISEE/PVE_PLAN_VEGETAL_POUR_ENVIRONNEMENT"]
		new_line["header624"] = element["ACTION_EXPLOI_ENVIRONMT_DEMARCHE_CONTRACTUALISEE/AUTRE"]
		new_line["header625"] = element["ACTION_EXPLOI_ENVIRONMT_DEMARCHE_CONTRACTUALISEE_OTHER"]
		new_line["header626"] = element["ACTION_EXPLOI_ENVIRONMT_MAE_LAQUELLE"]
		new_line["header627"] = element["ACTION_EXPLOI_ENVIRONMT_ORIENTATION_CTE_OU_CAD"]
		new_line["header628"] = element["ACTION_EXPLOI_ENVIRONMT_RAISONS"]
		new_line["header629"] = element["ACTION_EXPLOI_ENVIRONMT_PROPOSITIONS_MESURES"]
		new_line["header630"] = element["ACTION_EXPLOI_PRATIQ_UTILISATION_METHODES_PRECISION"]
		new_line["header631"] = element["ACTION_EXPLOI_PRATIQ_METHODES_PRECISION"]
		new_line["header632"] = element["ACTION_EXPLOI_PRATIQ_EVOLUTION_POUR_AMELIORATION_QUALITE_EAU_POTABLE"]
		new_line["header633"] = element["ACTION_EXPLOI_PRATIQ_EVOLUTION_POUR_AMELIORATION_QUAL_EP_COMMENTAIRE"]
		new_line["header634"] = element["ACTION_EXPLOI_PRATIQ_ABANDONNEES_OU_ADOPTEES_10_ANNEES"]
		new_line["header635"] = element["ACTION_EXPLOI_PRATIQ_MARGES_MANOEUVRE_GESTION_FERTI_PHYTO"]
		new_line["header636"] = element["ACTION_EXPLOI_PROJETS/D_ACHAT_MATERIEL"]
		new_line["header637"] = element["ACTION_EXPLOI_PROJETS/DE_CONVERSION"]
		new_line["header638"] = element["ACTION_EXPLOI_PROJETS/AUTRE"]
		new_line["header639"] = element["ACTION_EXPLOI_PROJET_OTHER"]
		new_line["header640"] = element["ACTION_EXPLOI_PROJETS_ACHAT_MATERIEL"]
		new_line["header641"] = element["ACTION_EXPLOI_PROJETS_CONVERSION"]
		new_line["header642"] = element["CONCLUSION_REMARQUES"]
		new_line["header643"] = element["CONCLUSION_IDEES_ACTIONS_BAC"]
				
		// -------------------------------------------
		// Ajout des données du formulaire courant dans la nouvelle structure d'export
		resultat["data"].push(new_line)
		//console.log(element)
	})
	return resultat;
}
// ********************************************************************************************************************
// 01/03/2021 : gestion des données siege dans on glet T_SIEGE
// Format idem à l'onglet principal : 100 colonnes à extraire 
exports.formatting_siege = function(jsonContent){
	line_GP = {
		// Copier le code d'initialisation des variables à utiliser dans le modèle de rapport

		"header1" : "",
		"header2" : "",
		"header3" : "",
		"header4" : "",
		"header5" : "",
		"header6" : "",
		"header7" : "",
		"header8" : "",
		"header9" : "",
		"header10" : "",
		"header11" : "",
		"header12" : "",
		"header13" : "",
		"header14" : "",
		"header15" : "",
		"header16" : "",
		"header17" : "",
		"header18" : "",
		"header19" : "",
		"header20" : "",
		"header21" : "",
		"header22" : "",
		"header23" : "",
		"header24" : "",
		"header25" : "",
		"header26" : "",
		"header27" : "",
		"header28" : "",
		"header29" : "",
		"header30" : "",
		"header31" : "",
		"header32" : "",
		"header33" : "",
		"header34" : "",
		"header35" : "",
		"header36" : "",
		"header37" : "",
		"header38" : "",
		"header39" : "",
		"header40" : "",
		"header41" : "",
		"header42" : "",
		"header43" : "",
		"header44" : "",
		"header45" : "",
		"header46" : "",
		"header47" : "",
		"header48" : "",
		"header49" : "",
		"header50" : "",
		"header51" : "",
		"header52" : "",
		"header53" : "",
		"header54" : "",
		"header55" : "",
		"header56" : "",
		"header57" : "",
		"header58" : "",
		"header59" : "",
		"header60" : "",
		"header61" : "",
		"header62" : "",
		"header63" : "",
		"header64" : "",
		"header65" : "",
		"header66" : "",
		"header67" : "",
		"header68" : "",
		"header69" : "",
		"header70" : "",
		"header71" : "",
		"header72" : "",
		"header73" : "",
		"header74" : "",
		"header75" : "",
		"header76" : "",
		"header77" : "",
		"header78" : "",
		"header79" : "",
		"header80" : "",
		"header81" : "",
		"header82" : "",
		"header83" : "",
		"header84" : "",
		"header85" : "",
		"header86" : "",
		"header87" : "",
		"header88" : "",
		"header89" : "",
		"header90" : "",
		"header91" : "",
		"header92" : "",
		"header93" : "",
		"header94" : "",
		"header95" : "",
		"header96" : "",
		"header97" : "",
		"header98" : "",
		"header99" : ""
	}
	resultat = {
		// Nom de la table résultat dans la structure construite ici => référencée dans le fichier modèle de rapport => ${table:data_GP1.NUM_PTS}
		"data" : []
	}
	jsonContent.forEach((element, index) => {
		new_line = Object.assign({}, line)

		// Pb de traitement Excel pour les valeurs numériques à sommer : extraction en texte => pas de somme des colonnes !!
		// new_line["header13"] = index	// forcé en numérique pour test somme dans table => OK 
		// => a voir : extraire les données censées être numériques en valeur !

		// Copier le code d'initialisation des variables : variable rapport = variable formulaire ou calcul
		// -------------------------------------------


				new_line = Object.assign({}, line_GP)
				new_line["header1"] = element["ID_EXPL_NOM_EXPLOITATION"]
				new_line["header2"] = element["ID_EXPL_NOM_EXPLOITANT"]
				new_line["header3"] = element["ID_EXPL_PRENOM_EXPLOITANT"]
				new_line["header4"] = element["ID_EXPL_ADRESSE_EXPLOITATION"]
				new_line["header5"] = element["ID_EXPL_LETTRE"]
				new_line["header6"] = element["PHYTO_BAC_TRANSPORT_PRODUITS_PHYTO_V_TRANSPORTES_AGRICULTEUR"]
				new_line["header7"] = element["PHYTO_BAC_TRANSPORT_PRODUITS_PHYTO_V_LIVRES_COOPERATIVE"]
				new_line["header8"] = element["PHYTO_BAC_STOCK_GESTION_PRODUITS"]
				new_line["header9"] = element["PHYTO_BAC_STOCK_LOCAL_SPECIFIQUE"]
				new_line["header10"] = element["PHYTO_BAC_STOCK_TOUS_PROD_AERE_VENTILE"]
				new_line["header11"] = element["PHYTO_BAC_STOCK_TOUS_PROD_NORMES_SECURITE"]
				new_line["header12"] = element["PHYTO_BAC_STOCK_PORTE_OUVRIR_INTERIEUR"]
				new_line["header13"] = element["PHYTO_BAC_STOCK_TOUS_PROD_PORTE_OUVRE_EXTERIEUR"]
				new_line["header14"] = element["PHYTO_BAC_STOCK_TOUS_PROD_EXISTENCE_PANNEAU_INTERDIT_BOIRE_ETC"]
				new_line["header15"] = element["PHYTO_BAC_STOCK_TOUS_PROD_INSTALLATION_ELECTRIQUE_CONFORME"]
				new_line["header16"] = element["PHYTO_BAC_STOCK_TOUS_PROD_EXTINCTEUR"]
				new_line["header17"] = element["PHYTO_BAC_STOCK_CL_CMR_FERME_CLEF"]
				new_line["header18"] = element["PHYTO_BAC_STOCK_CL_R50_R51_SOL_LOCAL_ETANCHE"]
				new_line["header19"] = element["PHYTO_BAC_STOCK_CL_R50_R52_EXISTENCE_DISPOSITIF_RETENTION"]
				new_line["header20"] = element["PHYTO_BAC_STOCK_CL_R50_R53_CAPACITE_RETENTION_LOCAL"]
				new_line["header21"] = element["PHYTO_BAC_STOCK_CL_R50_R54_RETENTION_SUFFISANTE_SI_RENVERSEMENT_ACCIDENTEL"]
				new_line["header22"] = element["PHYTO_BAC_STOCK_CL_R50_R55_RESISTANCE_AU_FEU_MATERIAUX_CONSTRUCTION"]
				new_line["header23"] = element["PHYTO_BAC_STOCK_EXISTENCE_POINT_EAU"]
				new_line["header24"] = element["PHYTO_BAC_STOCK_ELOIGNE_HABITATIONS"]
				new_line["header25"] = element["PHYTO_BAC_STOCK_DISTANCE_HABITATION"]
				new_line["header26"] = element["PHYTO_BAC_STOCK_PRODUITS_DANS_EMBALLAGE_ORIGINE"]
				new_line["header27"] = element["PHYTO_BAC_STOCK_ISOLATION_THERMIQUE"]
				new_line["header28"] = element["PHYTO_BAC_STOCK_REMARQUE"]
				new_line["header29"] = element["PHYTO_BAC_STOCK_DUREE_MAXI_PRODUIT"]
				new_line["header30"] = element["PHYTO_BAC_DECHET_EVPP_EVPP_RINCES_RANGES"]
				new_line["header31"] = element["PHYTO_BAC_DECHET_EVPP_DESTINATION_V_COLLECTE_ADIVALOR"]
				new_line["header32"] = element["PHYTO_BAC_DECHET_EVPP_DESTINATION_V_COLLECTE_PRESTATAIRE_AGREE"]
				new_line["header33"] = element["PHYTO_BAC_DECHET_EVPP_DESTINATION_V_DECHETTERIE"]
				new_line["header34"] = element["PHYTO_BAC_DECHET_EVPP_DESTINATION_V_ORDURES_MENAGERES"]
				new_line["header35"] = element["PHYTO_BAC_DECHET_EVPP_DESTINATION_V_PAS_EVACUATION"]
				new_line["header36"] = element["PHYTO_BAC_DECHET_EVPP_DESTINATION_V_BRULAGE"]
				new_line["header37"] = element["PHYTO_BAC_DECHET_EVPP_DESTINATION_V_NON_CONCERNE"]
				new_line["header38"] = element["PHYTO_BAC_DECHET_EVPP_DESTINATION_V_AUTRE"]
				new_line["header39"] = element["PHYTO_BAC_DECHET_EVPP_DESTINATION_OTHER"]
				new_line["header40"] = element["PHYTO_BAC_DECHET_PPNU_EXISTENCE"]
				new_line["header41"] = element["PHYTO_BAC_DECHET_PPNU_DESTINATION_V_COLLECTE_ADIVALOR_VIA_DISTRIBUTION"]
				new_line["header42"] = element["PHYTO_BAC_DECHET_PPNU_DESTINATION_V_COLLECTE_PRESTATAIRE_AGREE"]
				new_line["header43"] = element["PHYTO_BAC_DECHET_PPNU_DESTINATION_V_DECHETTERIE"]
				new_line["header44"] = element["PHYTO_BAC_DECHET_PPNU_DESTINATION_V_ORDURES_MENAGERES"]
				new_line["header45"] = element["PHYTO_BAC_DECHET_PPNU_DESTINATION_V_PAS_EVACUATION"]
				new_line["header46"] = element["PHYTO_BAC_DECHET_PPNU_DESTINATION_V_BRULAGE"]
				new_line["header47"] = element["PHYTO_BAC_DECHET_PPNU_DESTINATION_V_AUTRE"]
				new_line["header48"] = element["PHYTO_BAC_DECHET_PPNU_DESTINATION_OTHER"]
				new_line["header49"] = element["ENGRAIS_BAC_BATI_ELEVAGE_REGLEMT_MISE_AUX_NORMES"]
				new_line["header50"] = element["ENGRAIS_BAC_BATI_ELEVAGE_DESCR_DATE"]
				new_line["header51"] = element["ENGRAIS_BAC_BATI_ELEVAGE_REGLEMT_MISE_AUX_NORMES_ELEFFECTUEE"]
				new_line["header52"] = element["ENGRAIS_BAC_BATI_ELEVAGE_REGLEMT_MISE_AUX_NORMES_PREVUE_DATE"]
				new_line["header53"] = element["ENGRAIS_BAC_BATI_ELEVAGE_REGLEMT_EVOLUTION_CHEPTEL_DEPUIS_MISE_AUX_NORMES"]
				new_line["header54"] = element["ENGRAIS_BAC_BATI_ELEVAGE_REGLEMT_PRECISER_EVOLUTION"]
				new_line["header55"] = element["ENGRAIS_BAC_BATI_ELEVAGE_DESCR_TYPE_LOGEMENT"]
				new_line["header56"] = element["ENGRAIS_BAC_BATI_ELEVAGE_DESCR_DUREE_LOGEMENT"]
				new_line["header57"] = element["ENGRAIS_BAC_BATI_ELEVAGE_DESCR_SOL_ETANCHE"]
				new_line["header58"] = element["ENGRAIS_BAC_BATI_ELEVAGE_DESCR_SOL_PAILLE"]
				new_line["header59"] = element["ENGRAIS_BAC_BATI_ELEVAGE_DESCR_SEPARATION_EAUX_PLUIE"]
				new_line["header60"] = element["ENGRAIS_BAC_BATI_ELEVAGE_DESCR_DESTINATION_EAUX_PLUIE"]
				new_line["header61"] = element["ENGRAIS_BAC_BATI_ELEVAGE_AIRE_EXE_EXISTE"]
				new_line["header62"] = element["ENGRAIS_BAC_BATI_ELEVAGE_AIRE_EXE_SOL_ETANCHE"]
				new_line["header63"] = element["ENGRAIS_BAC_BATI_ELEVAGE_AIRE_EXE_SOL_PAILLE"]
				new_line["header64"] = element["ENGRAIS_BAC_BATI_ELEVAGE_AIRE_EXE_SEPARATION_EAUX_PLUIE"]
				new_line["header65"] = element["ENGRAIS_BAC_BATI_ELEVAGE_AIRE_EXE_DESTINATION_EAUX_PLUIE"]
				new_line["header66"] = element["ENGRAIS_BAC_BATI_ELEVAGE_STOCK_PRODUITS_VETERINAIRES"]
				new_line["header67"] = element["ENGRAIS_BAC_BATI_ELEVAGE_STOCK_PRODUITS_VETERINAIRES_PROXIMITE_COURS_EAU"]
				new_line["header68"] = element["ENGRAIS_BAC_BATI_ELEVAGE_STOCK_PRODUITS_VETERINAIRES_DISTANCE"]
				new_line["header69"] = element["ENGRAIS_BAC_BATI_ELEVAGE_STOCK_EFFLUENTS_ELEVAGE"]
				new_line["header70"] = element["ENGRAIS_BAC_STOCK_AUTRE_GESTION_EPANDAGES_TYPE_PRODUITS"]
				new_line["header71"] = element["ENGRAIS_BAC_STOCK_AUTRE_GESTION_EPANDAGES_QUANTITE"]
				new_line["header72"] = element["ENGRAIS_BAC_STOCK_AUTRE_GESTION_EPANDAGES_PERIODE"]
				new_line["header73"] = element["ENGRAIS_BAC_BATI_ELEVAGE_L_FUMIER_COMPACT_LIEU"]
				new_line["header74"] = element["ENGRAIS_BAC_BATI_ELEVAGE_L_FUMIER_COMPACT_AGE"]
				new_line["header75"] = element["ENGRAIS_BAC_BATI_ELEVAGE_L_FUMIER_COMPACT_VOL"]
				new_line["header76"] = element["ENGRAIS_BAC_BATI_ELEVAGE_L_FUMIER_COMPACT_ETANCH_OK"]
				new_line["header77"] = element["ENGRAIS_BAC_BATI_ELEVAGE_L_FUMIER_COMPACT_SURF"]
				new_line["header78"] = element["ENGRAIS_BAC_BATI_ELEVAGE_L_FUMIER_COMPACT_CAPA_OK"]
				new_line["header79"] = element["ENGRAIS_BAC_BATI_ELEVAGE_L_FUMIER_COMPACT_TROP_PLEIN_OK"]
				new_line["header80"] = element["ENGRAIS_BAC_BATI_ELEVAGE_L_FUMIER_COMPACT_DUREE"]
				new_line["header81"] = element["ENGRAIS_BAC_BATI_ELEVAGE_L_FUMIER_COMPACT_DEVENIR"]
				new_line["header82"] = element["ENGRAIS_BAC_BATI_ELEVAGE_EAUX_BLANCHES"]
				new_line["header83"] = element["ENGRAIS_BAC_BATI_ELEVAGE_DEVENIR_EFFLUENT/EPANDAGE"]
				new_line["header84"] = element["ENGRAIS_BAC_BATI_ELEVAGE_DEVENIR_EFFLUENT/ECHANGE_FUMIER_PAILLE"]
				new_line["header85"] = element["ENGRAIS_BAC_BATI_ELEVAGE_DEVENIR_EFFLUENT/AVANT_COLZA"]
				new_line["header86"] = element["ENGRAIS_BAC_BATI_ELEVAGE_DEVENIR_EFFLUENT/AVANT_MAIS_OU_SUR_PP"]
				new_line["header87"] = element["ENGRAIS_BAC_STOCK_AUTRE_HUILES_VIDANGE_RECUPERATION"]
				new_line["header88"] = element["ENGRAIS_BAC_STOCK_AUTRE_HUILES_VIDANGE_QUANTITE"]
				new_line["header89"] = element["ENGRAIS_BAC_STOCK_AUTRE_HUILES_VIDANGE_BAC_RETENTION"]
				new_line["header90"] = element["ENGRAIS_BAC_STOCK_AUTRE_HUILES_VIDANGE_DEVENIR"]
				new_line["header91"] = element["ENGRAIS_BAC_PUIT_PRESENCE"]
				new_line["header92"] = element["ENGRAIS_BAC_PUIT_UTILISE"]
				new_line["header93"] = element["ENGRAIS_BAC_PUIT_LOCALISATION"]
				new_line["header94"] = element["PTS_EAU_EXPLOITATION_PRESENCE_MARE"]
				new_line["header95"] = element["PTS_EAU_EXPLOITATION_UTILISATION_MARE"]
				new_line["header96"] = element["PTS_EAU_EXPLOITATION_PRESENCE_FORAGE"]
				new_line["header97"] = element["PTS_EAU_EXPLOITATION_UTILISATION_FORAGE"]
				new_line["header98"] = element["PTS_EAU_EXPLOITATION_RECUPERATION_EAUX_PLUIE"]
				new_line["header99"] = element["PTS_EAU_EXPLOITATION_UTILISATION_EAUX_PLUIE"]

				resultat["data"].push(new_line)
	})
	return resultat;
}
// ********************************************************************************************************************
// ********************************************************************************************************************
exports.formatting_GP8 = function(jsonContent){
	line_GP = {
		// Copier le code d'initialisation des variables à utiliser dans le modèle de rapport
		// -------------------------------------------
		// Structure de la table de données à extraire : N° du point de mesure, indice dans le groupe (voir si on utilise) puis liste 
		// des champs à extraire du groupe => toujours nommés de la même façon pour simplifier le paramétrage de l'export => 1 à N
		"IND_ENREG": "",
		"IND_GP": "",
		"NUM_PTS": "",
		"NOM": "",
		"PRENOM": "",
		"DATE_DIAG": "",
		"LETTRE" : "",
		"nomvar1" : "",
		"nomvar2" : "",
		"nomvar3" : "",
		"nomvar4" : "",
		"nomvar5" : "",
		"nomvar6" : "",
		"nomvar7" : "",
		"nomvar8" : "",
		"nomvar9" : "",
		"nomvar10" : "",
		"nomvar11" : ""
		// -------------------------------------------
	}
	resultat = {
		// Nom de la table résultat dans la structure construite ici => référencée dans le fichier modèle de rapport => ${table:data_GP1.NUM_PTS}
		"data_GP8" : []
	}
	// Nom du groupe repeat à extraire : dans le formulaire et donc dans le fichier de données
	// => à initialiser pour chaque groupe du formulaire
	nb_enreg = 0
	nom_GP = "NATURE_PROVENANCE_AUTRES_PRODUITS_UTILISES"
	jsonContent.forEach((element, index) => {

		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				new_line = Object.assign({}, line_GP)
				// Copier ici : paramétrage des champs du formulaire (group_repeat) à extraire et à copier dans la structure de données locale
				//   récupération de l'ID de la soumission principale (ici le N° du point de mesure = element["PTS_MES_NUM"] ) pour définir un ID unique pour chaque ligne
				//   indice dans le repeat => index dans la boucle : voir si utile, c'est plutot un N° = indice géré dans le formulaire (ajout) qui doit être utilisé
				// Il faut qu'il soit unique et maitrisé par utilisateur (ordre des mesures saisies)
				new_line["IND_ENREG"] = index
				new_line["IND_GP"] = index_GP
				// Données globales exploitation pour tous les groupes : Nom exploitation, nom exploitant, ..
				new_line["NUM_PTS"] = element["ID_EXPL_NOM_EXPLOITATION"]		
				new_line["NOM"] = element["ID_EXPL_NOM_EXPLOITANT"]				
				new_line["PRENOM"] = element["ID_EXPL_PRENOM_EXPLOITANT"]		
				new_line["DATE_DIAG"] = element["ID_EXPL_DATE_DIAGNOSTIC"]
				new_line["LETTRE"] = element["ID_EXPL_LETTRE"]		
				new_line["nomvar1"] = GP["ENGRAIS_BAC_STOCK_AUTRE_PRODUIT_NATURE"]
				new_line["nomvar2"] = GP["ENGRAIS_BAC_STOCK_AUTRE_PRODUIT_CONTENANT"]
				new_line["nomvar3"] = GP["ENGRAIS_BAC_STOCK_AUTRE_PRODUIT_CARACTERISTIQUES"]
				new_line["nomvar4"] = GP["ENGRAIS_BAC_STOCK_AUTRE_PRODUIT_VOLUME"]
				new_line["nomvar5"] = GP["ENGRAIS_BAC_STOCK_AUTRE_PRODUIT_DISPOSITIF_RETENTION"]
				new_line["nomvar6"] = GP["ENGRAIS_BAC_STOCK_AUTRE_PROXIMITE_ZONE_IMPERMEABILISEE"]
				new_line["nomvar7"] = GP["ENGRAIS_BAC_STOCK_AUTRE_PROXIMITE_ZONE_IMPERMEABILISEE_DISTANCE"]
				new_line["nomvar8"] = GP["ENGRAIS_BAC_STOCK_AUTRE_PROXIMITE_POINT_EAU"]
				new_line["nomvar9"] = GP["ENGRAIS_BAC_STOCK_AUTRE_PROXIMITE_POINT_EAU_DISTANCE"]
				new_line["nomvar10"] = GP["ENGRAIS_BAC_STOCK_AUTRE_PROXIMITE_RESEAU_PLUVIAL_OU_FOSSE"]
				new_line["nomvar11"] = GP["ENGRAIS_BAC_STOCK_AUTRE_PROXIMITE_RESEAU_PLUVIAL_OU_FOSSE_DISTANCE"]
				resultat["data_GP8"].push(new_line)
				nb_enreg++
			})
		}
		else
		{
			console.log("Pas de données " + nom_GP)
		}
	})
	console.log( "Nombre d'enreg GP8 : " + nb_enreg)
	return resultat;
}
// ********************************************************************************************************************
// 17/12/2020 : mise en place des groupes 1 -> 7
// ---------------------------------------------
exports.formatting_GP1 = function(jsonContent){
	line_GP = {
		// Copier le code d'initialisation des variables à utiliser dans le modèle de rapport
		// -------------------------------------------
		// Structure de la table de données à extraire : N° du point de mesure, indice dans le groupe (voir si on utilise) puis liste 
		// des champs à extraire du groupe => toujours nommés de la même façon pour simplifier le paramétrage de l'export => 1 à N
		"IND_ENREG": "",
		"IND_GP": "",
		"NUM_PTS": "",
		"NOM": "",
		"PRENOM": "",
		"DATE_DIAG": "",
		"LETTRE" : "",
		"nomvar1" : "",
		"nomvar2" : "",
		"nomvar3" : "",
		// -------------------------------------------
	}
	resultat = {
		// Nom de la table résultat dans la structure construite ici => référencée dans le fichier modèle de rapport => ${table:data_GP1.NUM_PTS}
		"data_GP1" : []
	}
	// Nom du groupe repeat à extraire : dans le formulaire et donc dans le fichier de données
	// => à initialiser pour chaque groupe du formulaire
	nb_enreg = 0
	nom_GP = "CULTURES_GEL_INDUSTRIEL_PRAIRIES"
	jsonContent.forEach((element, index) => {

		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				new_line = Object.assign({}, line_GP)
				// Copier ici : paramétrage des champs du formulaire (group_repeat) à extraire et à copier dans la structure de données locale
				//   récupération de l'ID de la soumission principale (ici le N° du point de mesure = element["PTS_MES_NUM"] ) pour définir un ID unique pour chaque ligne
				//   indice dans le repeat => index dans la boucle : voir si utile, c'est plutot un N° = indice géré dans le formulaire (ajout) qui doit être utilisé
				// Il faut qu'il soit unique et maitrisé par utilisateur (ordre des mesures saisies)
				new_line["IND_ENREG"] = index
				new_line["IND_GP"] = index_GP
				// Données globales exploitation pour tous les groupes : Nom exploitation, nom exploitant, ..
				new_line["NUM_PTS"] = element["ID_EXPL_NOM_EXPLOITATION"]		
				new_line["NOM"] = element["ID_EXPL_NOM_EXPLOITANT"]				
				new_line["PRENOM"] = element["ID_EXPL_PRENOM_EXPLOITANT"]		
				new_line["DATE_DIAG"] = element["ID_EXPL_DATE_DIAGNOSTIC"]
				new_line["LETTRE"] = element["ID_EXPL_LETTRE"]		
				
				new_line["nomvar1"] = GP["CARTO_ASSOL_CA_N_GEL_DESCRIPTION"]
				new_line["nomvar2"] = GP["CARTO_ASSOL_CA_N_GEL_SURFACE"]
				new_line["nomvar3"] = GP["CARTO_ASSOL_CA_N_GEL_RENDT_MOYEN"]
				resultat["data_GP1"].push(new_line)
				nb_enreg++
			})
		}
		else
		{
			console.log("Pas de données " + nom_GP)
		}
	})
	console.log( "Nombre d'enreg GP1 : " + nb_enreg)
	return resultat;
}
exports.formatting_GP2 = function(jsonContent){
	line_GP = {
		// Copier le code d'initialisation des variables à utiliser dans le modèle de rapport
		// -------------------------------------------
		// Structure de la table de données à extraire : N° du point de mesure, indice dans le groupe (voir si on utilise) puis liste 
		// des champs à extraire du groupe => toujours nommés de la même façon pour simplifier le paramétrage de l'export => 1 à N
		"IND_ENREG": "",
		"IND_GP": "",
		"NUM_PTS": "",
		"NOM": "",
		"PRENOM": "",
		"DATE_DIAG": "",
		"LETTRE" : "",
		"nomvar1" : "",
		"nomvar2" : "",
		"nomvar3" : "",
		// -------------------------------------------
	}
	resultat = {
		// Nom de la table résultat dans la structure construite ici => référencée dans le fichier modèle de rapport => ${table:data_GP1.NUM_PTS}
		"data_GP2" : []
	}
	// Nom du groupe repeat à extraire : dans le formulaire et donc dans le fichier de données
	// => à initialiser pour chaque groupe du formulaire
	nb_enreg = 0
	nom_GP = "CULTURES_GEL_INDUSTRIEL_PRAIRIES_002"
	jsonContent.forEach((element, index) => {

		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				new_line = Object.assign({}, line_GP)
				// Copier ici : paramétrage des champs du formulaire (group_repeat) à extraire et à copier dans la structure de données locale
				//   récupération de l'ID de la soumission principale (ici le N° du point de mesure = element["PTS_MES_NUM"] ) pour définir un ID unique pour chaque ligne
				//   indice dans le repeat => index dans la boucle : voir si utile, c'est plutot un N° = indice géré dans le formulaire (ajout) qui doit être utilisé
				// Il faut qu'il soit unique et maitrisé par utilisateur (ordre des mesures saisies)
				new_line["IND_ENREG"] = index
				new_line["IND_GP"] = index_GP
				// Données globales exploitation pour tous les groupes : Nom exploitation, nom exploitant, ..
				new_line["NUM_PTS"] = element["ID_EXPL_NOM_EXPLOITATION"]		
				new_line["NOM"] = element["ID_EXPL_NOM_EXPLOITANT"]				
				new_line["PRENOM"] = element["ID_EXPL_PRENOM_EXPLOITANT"]		
				new_line["DATE_DIAG"] = element["ID_EXPL_DATE_DIAGNOSTIC"]
				new_line["LETTRE"] = element["ID_EXPL_LETTRE"]		
				
				new_line["nomvar1"] = GP["CARTO_ASSOL_CA_NM1_GEL_DESCRIPTION"]
				new_line["nomvar2"] = GP["CARTO_ASSOL_CA_NM1_GEL_SURFACE"]
				new_line["nomvar3"] = GP["CARTO_ASSOL_CA_NM1_GEL_RENDT_MOYEN"]
				resultat["data_GP2"].push(new_line)
				nb_enreg++
			})
		}
		else
		{
			console.log("Pas de données " + nom_GP)
		}
	})
	console.log( "Nombre d'enreg GP2 : " + nb_enreg)
	return resultat;
}
exports.formatting_GP3 = function(jsonContent){
	line_GP = {
		// Copier le code d'initialisation des variables à utiliser dans le modèle de rapport
		// -------------------------------------------
		// Structure de la table de données à extraire : N° du point de mesure, indice dans le groupe (voir si on utilise) puis liste 
		// des champs à extraire du groupe => toujours nommés de la même façon pour simplifier le paramétrage de l'export => 1 à N
		"IND_ENREG": "",
		"IND_GP": "",
		"NUM_PTS": "",
		"NOM": "",
		"PRENOM": "",
		"DATE_DIAG": "",
		"LETTRE" : "",
		"nomvar1" : "",
		"nomvar2" : "",
		"nomvar3" : "",
		// -------------------------------------------
	}
	resultat = {
		// Nom de la table résultat dans la structure construite ici => référencée dans le fichier modèle de rapport => ${table:data_GP1.NUM_PTS}
		"data_GP3" : []
	}
	// Nom du groupe repeat à extraire : dans le formulaire et donc dans le fichier de données
	// => à initialiser pour chaque groupe du formulaire
	nb_enreg = 0
	nom_GP = "CULTURES_GEL_INDUSTRIEL_PRAIRIES_004"
	jsonContent.forEach((element, index) => {

		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				new_line = Object.assign({}, line_GP)
				// Copier ici : paramétrage des champs du formulaire (group_repeat) à extraire et à copier dans la structure de données locale
				//   récupération de l'ID de la soumission principale (ici le N° du point de mesure = element["PTS_MES_NUM"] ) pour définir un ID unique pour chaque ligne
				//   indice dans le repeat => index dans la boucle : voir si utile, c'est plutot un N° = indice géré dans le formulaire (ajout) qui doit être utilisé
				// Il faut qu'il soit unique et maitrisé par utilisateur (ordre des mesures saisies)
				new_line["IND_ENREG"] = index
				new_line["IND_GP"] = index_GP
				// Données globales exploitation pour tous les groupes : Nom exploitation, nom exploitant, ..
				new_line["NUM_PTS"] = element["ID_EXPL_NOM_EXPLOITATION"]		
				new_line["NOM"] = element["ID_EXPL_NOM_EXPLOITANT"]				
				new_line["PRENOM"] = element["ID_EXPL_PRENOM_EXPLOITANT"]		
				new_line["DATE_DIAG"] = element["ID_EXPL_DATE_DIAGNOSTIC"]
				new_line["LETTRE"] = element["ID_EXPL_LETTRE"]		
				
				new_line["nomvar1"] = GP["CARTO_ASSOL_CA_NM2_GEL_DESCRIPTION"]
				new_line["nomvar2"] = GP["CARTO_ASSOL_CA_NM2_GEL_SURFACE"]
				new_line["nomvar3"] = GP["CARTO_ASSOL_CA_NM2_GEL_RENDT_MOYEN"]
				resultat["data_GP3"].push(new_line)
				nb_enreg++
			})
		}
		else
		{
			console.log("Pas de données " + nom_GP)
		}
	})
	console.log( "Nombre d'enreg GP3 : " + nb_enreg)
	return resultat;
}
exports.formatting_GP4 = function(jsonContent){
	line_GP = {
		// Copier le code d'initialisation des variables à utiliser dans le modèle de rapport
		// -------------------------------------------
		// Structure de la table de données à extraire : N° du point de mesure, indice dans le groupe (voir si on utilise) puis liste 
		// des champs à extraire du groupe => toujours nommés de la même façon pour simplifier le paramétrage de l'export => 1 à N
		"IND_ENREG": "",
		"IND_GP": "",
		"NUM_PTS": "",
		"NOM": "",
		"PRENOM": "",
		"DATE_DIAG": "",
		"LETTRE" : "",
		"nomvar1" : "",
		"nomvar2" : "",
		"nomvar3" : "",
		// -------------------------------------------
	}
	resultat = {
		// Nom de la table résultat dans la structure construite ici => référencée dans le fichier modèle de rapport => ${table:data_GP1.NUM_PTS}
		"data_GP4" : []
	}
	// Nom du groupe repeat à extraire : dans le formulaire et donc dans le fichier de données
	// => à initialiser pour chaque groupe du formulaire
	nb_enreg = 0
	nom_GP = "QUEL_EST_CHARGEMENT_HECTARE_POUR_CHAQUE_PRAIRIE_CONCERNEE_ZPAAC"
	jsonContent.forEach((element, index) => {

		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				new_line = Object.assign({}, line_GP)
				// Copier ici : paramétrage des champs du formulaire (group_repeat) à extraire et à copier dans la structure de données locale
				//   récupération de l'ID de la soumission principale (ici le N° du point de mesure = element["PTS_MES_NUM"] ) pour définir un ID unique pour chaque ligne
				//   indice dans le repeat => index dans la boucle : voir si utile, c'est plutot un N° = indice géré dans le formulaire (ajout) qui doit être utilisé
				// Il faut qu'il soit unique et maitrisé par utilisateur (ordre des mesures saisies)
				new_line["IND_ENREG"] = index
				new_line["IND_GP"] = index_GP
				// Données globales exploitation pour tous les groupes : Nom exploitation, nom exploitant, ..
				new_line["NUM_PTS"] = element["ID_EXPL_NOM_EXPLOITATION"]		
				new_line["NOM"] = element["ID_EXPL_NOM_EXPLOITANT"]				
				new_line["PRENOM"] = element["ID_EXPL_PRENOM_EXPLOITANT"]		
				new_line["DATE_DIAG"] = element["ID_EXPL_DATE_DIAGNOSTIC"]
				new_line["LETTRE"] = element["ID_EXPL_LETTRE"]		
				
				new_line["nomvar1"] = GP["ANI_PROD_SURF_FOURR_CHARGMT_ZPAAC_NOM_PARCELLE"]
				new_line["nomvar2"] = GP["ANI_PROD_SURF_FOURR_CHARGMT_ZPAAC_CAMPAGNE"]
				new_line["nomvar3"] = GP["ANI_PROD_SURF_FOURR_CHARGMT_ZPAAC_CHARGEMENT_HECTARE"]
				resultat["data_GP4"].push(new_line)
				nb_enreg++
			})
		}
		else
		{
			console.log("Pas de données " + nom_GP)
		}
	})
	console.log( "Nombre d'enreg GP4 : " + nb_enreg)
	return resultat;
}
exports.formatting_GP5 = function(jsonContent){
	line_GP = {
		// Copier le code d'initialisation des variables à utiliser dans le modèle de rapport
		// -------------------------------------------
		// Structure de la table de données à extraire : N° du point de mesure, indice dans le groupe (voir si on utilise) puis liste 
		// des champs à extraire du groupe => toujours nommés de la même façon pour simplifier le paramétrage de l'export => 1 à N
		"IND_ENREG": "",
		"IND_GP": "",
		"NUM_PTS": "",
		"NOM": "",
		"PRENOM": "",
		"DATE_DIAG": "",
		"LETTRE" : "",
		"nomvar1" : "",
		"nomvar2" : "",
		"nomvar3" : "",
		"nomvar4" : "",
		"nomvar5" : "",
		"nomvar6" : "",
		"nomvar7" : "",
		"nomvar8" : "",
		"nomvar9" : "",
		"nomvar10" : "",
		"nomvar11" : "",
		"nomvar12" : "",
		"nomvar13" : ""
		// -------------------------------------------
	}
	resultat = {
		// Nom de la table résultat dans la structure construite ici => référencée dans le fichier modèle de rapport => ${table:data_GP1.NUM_PTS}
		"data_GP5" : []
	}
	// Nom du groupe repeat à extraire : dans le formulaire et donc dans le fichier de données
	// => à initialiser pour chaque groupe du formulaire
	nb_enreg = 0
	nom_GP = "ITINERAIRE_TECHNIQUE_CULTURE_CAMPAGNE_N_ANNEE_CAPAGNE_N"
	jsonContent.forEach((element, index) => {

		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				new_line = Object.assign({}, line_GP)
				// Copier ici : paramétrage des champs du formulaire (group_repeat) à extraire et à copier dans la structure de données locale
				//   récupération de l'ID de la soumission principale (ici le N° du point de mesure = element["PTS_MES_NUM"] ) pour définir un ID unique pour chaque ligne
				//   indice dans le repeat => index dans la boucle : voir si utile, c'est plutot un N° = indice géré dans le formulaire (ajout) qui doit être utilisé
				// Il faut qu'il soit unique et maitrisé par utilisateur (ordre des mesures saisies)
				new_line["IND_ENREG"] = index
				new_line["IND_GP"] = index_GP
				// Données globales exploitation pour tous les groupes : Nom exploitation, nom exploitant, ..
				new_line["NUM_PTS"] = element["ID_EXPL_NOM_EXPLOITATION"]		
				new_line["NOM"] = element["ID_EXPL_NOM_EXPLOITANT"]				
				new_line["PRENOM"] = element["ID_EXPL_PRENOM_EXPLOITANT"]		
				new_line["DATE_DIAG"] = element["ID_EXPL_DATE_DIAGNOSTIC"]
				new_line["LETTRE"] = element["ID_EXPL_LETTRE"]		
				
				new_line["nomvar1"] = GP["TECH_CULT_CAMP_N_PARCELLE"]
				new_line["nomvar2"] = GP["TECH_CULT_CAMP_N_CULTURE"]
				new_line["nomvar3"] = GP["TECH_CULT_CAMP_N_RENDEMENT_OBJECTIF"]
				new_line["nomvar4"] = GP["TECH_CULT_CAMP_N_RENDEMENT_REEL"]
				new_line["nomvar5"] = GP["TECH_CULT_CAMP_N_DATE_SEMIS"]
				new_line["nomvar6"] = GP["TECH_CULT_CAMP_N_TYPE_PRODUIT_APPLIQUE"]
				new_line["nomvar7"] = GP["TECH_CULT_CAMP_N_NOM_PRODUIT"]
				new_line["nomvar8"] = GP["TECH_CULT_CAMP_N_SURFACE_TRAITEE"]
				new_line["nomvar9"] = GP["TECH_CULT_CAMP_N_DATE_APPLICATION"]
				new_line["nomvar10"] = GP["TECH_CULT_CAMP_N_DOSE_PREVISIONNELAPPLIQUER"]
				new_line["nomvar11"] = GP["TECH_CULT_CAMP_N_DOSE_REELAPPLIQUEE"]
				new_line["nomvar12"] = GP["TECH_CULT_CAMP_N_AZOTE_EFFICACE"]
				new_line["nomvar13"] = GP["TECH_CULT_CAMP_N_FOURNITURES_SOL"]
				resultat["data_GP5"].push(new_line)
				nb_enreg++
			})
		}
		else
		{
			console.log("Pas de données " + nom_GP)
		}
	})
	console.log( "Nombre d'enreg GP5 : " + nb_enreg)
	return resultat;
}
exports.formatting_GP6 = function(jsonContent){
	line_GP = {
		// Copier le code d'initialisation des variables à utiliser dans le modèle de rapport
		// -------------------------------------------
		// Structure de la table de données à extraire : N° du point de mesure, indice dans le groupe (voir si on utilise) puis liste 
		// des champs à extraire du groupe => toujours nommés de la même façon pour simplifier le paramétrage de l'export => 1 à N
		"IND_ENREG": "",
		"IND_GP": "",
		"NUM_PTS": "",
		"NOM": "",
		"PRENOM": "",
		"DATE_DIAG": "",
		"LETTRE" : "",
		"nomvar1" : "",
		"nomvar2" : "",
		"nomvar3" : "",
		"nomvar4" : "",
		"nomvar5" : "",
		"nomvar6" : "",
		"nomvar7" : "",
		"nomvar8" : "",
		"nomvar9" : "",
		"nomvar10" : "",
		"nomvar11" : "",
		"nomvar12" : "",
		"nomvar13" : ""
		// -------------------------------------------
	}
	resultat = {
		// Nom de la table résultat dans la structure construite ici => référencée dans le fichier modèle de rapport => ${table:data_GP1.NUM_PTS}
		"data_GP6" : []
	}
	// Nom du groupe repeat à extraire : dans le formulaire et donc dans le fichier de données
	// => à initialiser pour chaque groupe du formulaire
	nb_enreg = 0
	nom_GP = "ITINERAIRE_TECHNIQUE_CULTURE_CAMPAGNE_N_1_ANNEE_CAPAGNE_N_1"
	jsonContent.forEach((element, index) => {

		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				new_line = Object.assign({}, line_GP)
				// Copier ici : paramétrage des champs du formulaire (group_repeat) à extraire et à copier dans la structure de données locale
				//   récupération de l'ID de la soumission principale (ici le N° du point de mesure = element["PTS_MES_NUM"] ) pour définir un ID unique pour chaque ligne
				//   indice dans le repeat => index dans la boucle : voir si utile, c'est plutot un N° = indice géré dans le formulaire (ajout) qui doit être utilisé
				// Il faut qu'il soit unique et maitrisé par utilisateur (ordre des mesures saisies)
				new_line["IND_ENREG"] = index
				new_line["IND_GP"] = index_GP
				// Données globales exploitation pour tous les groupes : Nom exploitation, nom exploitant, ..
				new_line["NUM_PTS"] = element["ID_EXPL_NOM_EXPLOITATION"]		
				new_line["NOM"] = element["ID_EXPL_NOM_EXPLOITANT"]				
				new_line["PRENOM"] = element["ID_EXPL_PRENOM_EXPLOITANT"]		
				new_line["DATE_DIAG"] = element["ID_EXPL_DATE_DIAGNOSTIC"]
				new_line["LETTRE"] = element["ID_EXPL_LETTRE"]		
				
				new_line["nomvar1"] = GP["TECH_CULT_CAMP_NM1_PARCELLE"]
				new_line["nomvar2"] = GP["TECH_CULT_CAMP_NM1_CULTURE"]
				new_line["nomvar3"] = GP["TECH_CULT_CAMP_NM1_RENDEMENT_OBJECTIF"]
				new_line["nomvar4"] = GP["TECH_CULT_CAMP_NM1_RENDEMENT_REEL"]
				new_line["nomvar5"] = GP["TECH_CULT_CAMP_NM1_DATE_SEMIS"]
				new_line["nomvar6"] = GP["TECH_CULT_CAMP_NM1_TYPE_PRODUIT_APPLIQUE"]
				new_line["nomvar7"] = GP["TECH_CULT_CAMP_NM1_NOM_PRODUIT"]
				new_line["nomvar8"] = GP["TECH_CULT_CAMP_NM1_SURFACE_TRAITEE"]
				new_line["nomvar9"] = GP["TECH_CULT_CAMP_NM1_DATE_APPLICATION"]
				new_line["nomvar10"] = GP["TECH_CULT_CAMP_NM1_DOSE_PREVISIONNELAPPLIQUER"]
				new_line["nomvar11"] = GP["TECH_CULT_CAMP_NM1_DOSE_REELAPPLIQUEE"]
				new_line["nomvar12"] = GP["TECH_CULT_CAMP_NM1_AZOTE_EFFICACE"]
				new_line["nomvar13"] = GP["TECH_CULT_CAMP_NM1_FOURNITURES_SOL"]
				resultat["data_GP6"].push(new_line)
				nb_enreg++
			})
		}
		else
		{
			console.log("Pas de données " + nom_GP)
		}
	})
	console.log( "Nombre d'enreg GP6 : " + nb_enreg)
	return resultat;
}
exports.formatting_GP7 = function(jsonContent){
	line_GP = {
		// Copier le code d'initialisation des variables à utiliser dans le modèle de rapport
		// -------------------------------------------
		// Structure de la table de données à extraire : N° du point de mesure, indice dans le groupe (voir si on utilise) puis liste 
		// des champs à extraire du groupe => toujours nommés de la même façon pour simplifier le paramétrage de l'export => 1 à N
		"IND_ENREG": "",
		"IND_GP": "",
		"NUM_PTS": "",	
		"NOM": "",
		"PRENOM": "",
		"DATE_DIAG": "",
		"LETTRE" : "",
		"nomvar1" : "",
		"nomvar2" : "",
		"nomvar3" : "",
		"nomvar4" : "",
		"nomvar5" : "",
		"nomvar6" : "",
		"nomvar7" : "",
		"nomvar8" : "",
		"nomvar9" : "",
		"nomvar10" : "",
		"nomvar11" : "",
		"nomvar12" : "",
		"nomvar13" : ""
		// -------------------------------------------
	}
	resultat = {
		// Nom de la table résultat dans la structure construite ici => référencée dans le fichier modèle de rapport => ${table:data_GP1.NUM_PTS}
		"data_GP7" : []
	}
	// Nom du groupe repeat à extraire : dans le formulaire et donc dans le fichier de données
	// => à initialiser pour chaque groupe du formulaire
	nb_enreg = 0
	nom_GP = "ITINERAIRE_TECHNIQUE_CULTURE_CAMPAGNE_N_2_ANNEE_CAPAGNE_N_2"
	jsonContent.forEach((element, index) => {

		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				new_line = Object.assign({}, line_GP)
				// Copier ici : paramétrage des champs du formulaire (group_repeat) à extraire et à copier dans la structure de données locale
				//   récupération de l'ID de la soumission principale (ici le N° du point de mesure = element["PTS_MES_NUM"] ) pour définir un ID unique pour chaque ligne
				//   indice dans le repeat => index dans la boucle : voir si utile, c'est plutot un N° = indice géré dans le formulaire (ajout) qui doit être utilisé
				// Il faut qu'il soit unique et maitrisé par utilisateur (ordre des mesures saisies)
				new_line["IND_ENREG"] = index
				new_line["IND_GP"] = index_GP
				// Données globales exploitation pour tous les groupes : Nom exploitation, nom exploitant, ..
				new_line["NUM_PTS"] = element["ID_EXPL_NOM_EXPLOITATION"]		
				new_line["NOM"] = element["ID_EXPL_NOM_EXPLOITANT"]				
				new_line["PRENOM"] = element["ID_EXPL_PRENOM_EXPLOITANT"]		
				new_line["DATE_DIAG"] = element["ID_EXPL_DATE_DIAGNOSTIC"]
				new_line["LETTRE"] = element["ID_EXPL_LETTRE"]		
				
				new_line["nomvar1"] = GP["TECH_CULT_CAMP_NM2_PARCELLE"]
				new_line["nomvar2"] = GP["TECH_CULT_CAMP_NM2_CULTURE"]
				new_line["nomvar3"] = GP["TECH_CULT_CAMP_NM2_RENDEMENT_OBJECTIF"]
				new_line["nomvar4"] = GP["TECH_CULT_CAMP_NM2_RENDEMENT_REEL"]
				new_line["nomvar5"] = GP["TECH_CULT_CAMP_NM2_DATE_SEMIS"]
				new_line["nomvar6"] = GP["TECH_CULT_CAMP_NM2_TYPE_PRODUIT_APPLIQUE"]
				new_line["nomvar7"] = GP["TECH_CULT_CAMP_NM2_NOM_PRODUIT"]
				new_line["nomvar8"] = GP["TECH_CULT_CAMP_NM2_SURFACE_TRAITEE"]
				new_line["nomvar9"] = GP["TECH_CULT_CAMP_NM2_DATE_APPLICATION"]
				new_line["nomvar10"] = GP["TECH_CULT_CAMP_NM2_DOSE_PREVISIONNELAPPLIQUER"]
				new_line["nomvar11"] = GP["TECH_CULT_CAMP_NM2_DOSE_REELAPPLIQUEE"]
				new_line["nomvar12"] = GP["TECH_CULT_CAMP_NM2_AZOTE_EFFICACE"]
				new_line["nomvar13"] = GP["TECH_CULT_CAMP_NM2_FOURNITURES_SOL"]
								
				resultat["data_GP7"].push(new_line)
				nb_enreg++
			})
		}
		else
		{
			console.log("Pas de données " + nom_GP)
		}
	})
	console.log( "Nombre d'enreg GP7 : " + nb_enreg)
	return resultat;
}
// ********************************************************************************************************************
// 09/02/2021 : Conversion d'un group en group_repeat => 2 tables supplémentaires à extraire
// GP9 : Stockage des engrais et Cuve azote liquide
// ********************************************************************************************************************
exports.formatting_GP9 = function(jsonContent){
	line_GP = {
		// Copier le code d'initialisation des variables à utiliser dans le modèle de rapport
		// -------------------------------------------
		// Structure de la table de données à extraire : N° du point de mesure, indice dans le groupe (voir si on utilise) puis liste 
		// des champs à extraire du groupe => toujours nommés de la même façon pour simplifier le paramétrage de l'export => 1 à N
		"IND_ENREG": "",
		"IND_GP": "",
		"NUM_PTS": "",
		"NOM": "",
		"PRENOM": "",
		"DATE_DIAG": "",
		"LETTRE" : "",
		// voir onglet TAB_GP9 de Modele_creation_code_Utils_Js_Agri_V1.xlsx	
		"nomvar1" : "",
		"nomvar2" : "",
		"nomvar3" : "",
		"nomvar4" : "",
		"nomvar5" : "",
		"nomvar6" : "",
		"nomvar7" : "",
		"nomvar8" : "",
		"nomvar9" : "",
		"nomvar10" : "",
		"nomvar11" : "",
		"nomvar12" : "",
		"nomvar13" : "",
		"nomvar14" : "",
		"nomvar15" : "",
		"nomvar16" : "",
		"nomvar17" : "",
		"nomvar18" : "",
		"nomvar19" : "",
		"nomvar20" : "",
		// -------------------------------------------
	}
	resultat = {
		// Nom de la table résultat dans la structure construite ici => référencée dans le fichier modèle de rapport => ${table:data_GP1.NUM_PTS}
		"data_GP9" : []
	}
	// Nom du groupe repeat à extraire : dans le formulaire et donc dans le fichier de données
	// => à initialiser pour chaque groupe du formulaire
	nb_enreg = 0
	nom_GP = "GR_STOCKAGE_ENGRAIS"		// 08/02/2021 : Nom du nouveau group repeat => GP9
	jsonContent.forEach((element, index) => {
		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				new_line = Object.assign({}, line_GP)
				// Copier ici : paramétrage des champs du formulaire (group_repeat) à extraire et à copier dans la structure de données locale
				//   récupération de l'ID de la soumission principale (ici le N° du point de mesure = element["PTS_MES_NUM"] ) pour définir un ID unique pour chaque ligne
				//   indice dans le repeat => index dans la boucle : voir si utile, c'est plutot un N° = indice géré dans le formulaire (ajout) qui doit être utilisé
				// Il faut qu'il soit unique et maitrisé par utilisateur (ordre des mesures saisies)
				new_line["IND_ENREG"] = index
				new_line["IND_GP"] = index_GP
				// Données globales exploitation pour tous les groupes : Nom exploitation, nom exploitant, ..
				new_line["NUM_PTS"] = element["ID_EXPL_NOM_EXPLOITATION"]		
				new_line["NOM"] = element["ID_EXPL_NOM_EXPLOITANT"]				
				new_line["PRENOM"] = element["ID_EXPL_PRENOM_EXPLOITANT"]		
				new_line["DATE_DIAG"] = element["ID_EXPL_DATE_DIAGNOSTIC"]
				new_line["LETTRE"] = element["ID_EXPL_LETTRE"]		
				// voir onglet TAB_GP9_GP10 de Modele_creation_code_Utils_Js_Agri_V1.xlsx	
				new_line["nomvar1"] = GP["ENGRAIS_BAC_STOCK_NOM"]
				new_line["nomvar2"] = GP["ENGRAIS_BAC_STOCK_L_NATURE_DES_ENGRAIS"]
				new_line["nomvar3"] = GP["ENGRAIS_BAC_STOCK_L_NATURE_DES_ENGRAIS_OTHER"]
				new_line["nomvar4"] = GP["ENGRAIS_BAC_STOCK_QUANTITE_MAXI_MINERAL"]
				new_line["nomvar5"] = GP["ENGRAIS_BAC_STOCK_LIEU_SPECIFIQUE"]
				new_line["nomvar6"] = GP["ENGRAIS_BAC_STOCK_CARACTERISTIQUES_LIEU"]
				new_line["nomvar7"] = GP["ENGRAIS_BAC_STOCK_PROXIMITE"]
				new_line["nomvar8"] = GP["ENGRAIS_BAC_STOCK_LIEU_FACILE_ACCES"]
				new_line["nomvar9"] = GP["ENGRAIS_BAC_STOCK_COMMENTAIRE"]
				
				new_line["nomvar10"] = GP["ENGRAIS_BAC_STOCK_CUVE_AZOTE_PRESENCE"]
				new_line["nomvar11"] = GP["ENGRAIS_BAC_STOCK_CUVE_AZOTE_RECENTE"]
				new_line["nomvar12"] = GP["ENGRAIS_BAC_STOCK_CUVE_AZOTE_BON_ETAT"]
				new_line["nomvar13"] = GP["ENGRAIS_BAC_STOCK_CUVE_AZOTE_DOUBLE_ENVELOPPE"]
				new_line["nomvar14"] = GP["ENGRAIS_BAC_STOCK_CUVE_AZOTE_CUVE_RETENTION"]
				new_line["nomvar15"] = GP["ENGRAIS_BAC_STOCK_CUVE_AZOTE_PROXIMITE_POINT_EAU"]
				new_line["nomvar16"] = GP["ENGRAIS_BAC_STOCK_CUVE_AZOTE_DISTANCE_POINT_EAU"]
				// 16/02/2021 : ajout de 4 variables dans la partie de gestion des cuves azote => 17 à 20
				new_line["nomvar17"] = GP["ENGRAIS_BAC_STOCK_CUVE_AZOTE_FOSSE_GEOMEMBRANE"]
				new_line["nomvar18"] = GP["ENGRAIS_BAC_STOCK_CUVE_AZOTE_SAC_BACHE"]
				new_line["nomvar19"] = GP["ENGRAIS_BAC_STOCK_CUVE_AZOTE_BACHE_RETENTION"]
				new_line["nomvar20"] = GP["ENGRAIS_BAC_STOCK_CUVE_AZOTE_REMARQUE"]
				resultat["data_GP9"].push(new_line)
				nb_enreg++
			})
		}
		else
		{
			console.log("Pas de données " + nom_GP)
		}
	})
	console.log( "Nombre d'enreg GP9 : " + nb_enreg)
	return resultat;
}

exports.formatting_GP10_ajoute_a_GP9 = function(jsonContent){
	line_GP = {
		// Copier le code d'initialisation des variables à utiliser dans le modèle de rapport
		// -------------------------------------------
		// Structure de la table de données à extraire : N° du point de mesure, indice dans le groupe (voir si on utilise) puis liste 
		// des champs à extraire du groupe => toujours nommés de la même façon pour simplifier le paramétrage de l'export => 1 à N
		"IND_ENREG": "",
		"IND_GP": "",
		"NUM_PTS": "",
		"NOM": "",
		"PRENOM": "",
		"DATE_DIAG": "",
		"LETTRE" : "",
		// voir onglet TAB_GP9_GP10 de Modele_creation_code_Utils_Js_Agri_V1.xlsx	
		"nomvar1" : "",
		"nomvar2" : "",
		"nomvarN" : "",

		// -------------------------------------------
	}
	resultat = {
		// Nom de la table résultat dans la structure construite ici => référencée dans le fichier modèle de rapport => ${table:data_GP1.NUM_PTS}
		"data_GP10" : []
	}
	// Nom du groupe repeat à extraire : dans le formulaire et donc dans le fichier de données
	// => à initialiser pour chaque groupe du formulaire
	nb_enreg = 0
	nom_GP = "GR_CUVE_AZOTE_LIQUIDE"		// 08/02/2021 : Nom du nouveau group repeat => GP10
	jsonContent.forEach((element, index) => {

		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				new_line = Object.assign({}, line_GP)
				// Copier ici : paramétrage des champs du formulaire (group_repeat) à extraire et à copier dans la structure de données locale
				//   récupération de l'ID de la soumission principale (ici le N° du point de mesure = element["PTS_MES_NUM"] ) pour définir un ID unique pour chaque ligne
				//   indice dans le repeat => index dans la boucle : voir si utile, c'est plutot un N° = indice géré dans le formulaire (ajout) qui doit être utilisé
				// Il faut qu'il soit unique et maitrisé par utilisateur (ordre des mesures saisies)
				new_line["IND_ENREG"] = index
				new_line["IND_GP"] = index_GP
				// Données globales exploitation pour tous les groupes : Nom exploitation, nom exploitant, ..
				new_line["NUM_PTS"] = element["ID_EXPL_NOM_EXPLOITATION"]		
				new_line["NOM"] = element["ID_EXPL_NOM_EXPLOITANT"]				
				new_line["PRENOM"] = element["ID_EXPL_PRENOM_EXPLOITANT"]		
				new_line["DATE_DIAG"] = element["ID_EXPL_DATE_DIAGNOSTIC"]
				new_line["LETTRE"] = element["ID_EXPL_LETTRE"]		
		// voir onglet TAB_GP9_GP10 de Modele_creation_code_Utils_Js_Agri_V1.xlsx	
				
				new_line["nomvar1"] = GP["FORM_GP_champ1"]
				new_line["nomvar2"] = GP["FORM_GP_champ2"]
				new_line["nomvarN"] = GP["FORM_GP_champN"]
				resultat["data_GP10"].push(new_line)
				nb_enreg++
			})
		}
		else
		{
			console.log("Pas de données " + nom_GP)
		}
	})
	console.log( "Nombre d'enreg GP10 : " + nb_enreg)
	return resultat;
}
// ********************************************************************************************************************
// Fonction d'extraction des données pour un group_repeat avec des soumissions multiples : une fonction par groupe 
// => création d'une table "à plat" par groupe pour l'ensemble des soumissions : 
//   ID soumission : utiliser un champ ID global de la soumission 
//   indice dans GP : utiliser index de parcours dans la boucle foreach
//   dénomination utilisateur de la soumission : element["_PTS_MES_NUM"] = N° du point de mesure pour les Eaux_residuaires : !! donnée utilisateur => vérifier unicité
//   liste des valeurs des champs du groupe à extraire
//
// Copier la fonction _modele puis initialiser les variables spécifiques au groupe à extraire
// La liste des variables et correspondance par group_repeat sont dans le fichier de paramétrage : Modele_creation_code_Utils_Js_Agri.xlsx
// onglet Corresp_Tableaux => liste des noms de variable pour définir la structure et correspondance avec les champs du formulaire
//    colonne O : nom de la table data_GPxx (répetée sur toutes les lignes d'un même groupe)
//    colonne R : code de définition de la structure => init le line_GP
//    colonne S : code d'initialisation des enregistrements : correspondance entre nomvarxx et champ du group_repeat à extraire => new_line["nomvarxx"] = GP["champ_GP"]

exports.formatting_GP_xx_modele = function(jsonContent){
	line_GP = {
		// Copier le code d'initialisation des variables à utiliser dans le modèle de rapport
		// -------------------------------------------
		// Structure de la table de données à extraire : N° du point de mesure, indice dans le groupe (voir si on utilise) puis liste 
		// des champs à extraire du groupe => toujours nommés de la même façon pour simplifier le paramétrage de l'export => 1 à N
		"IND_ENREG": "",
		"IND_GP": "",
		"NUM_PTS": "",
		"nomvar1" : "",
		"nomvar2" : "",
		"nomvarN" : "",
		// -------------------------------------------
	}
	resultat = {
		// Nom de la table résultat dans la structure construite ici => référencée dans le fichier modèle de rapport => ${table:data_GP1.NUM_PTS}
		"data_GPxxx" : []
	}
	// Nom du groupe repeat à extraire : dans le formulaire et donc dans le fichier de données
	// => à initialiser pour chaque groupe du formulaire
	nb_enreg = 0
	nom_GP = "xx_nom_GP_xx"
	jsonContent.forEach((element, index) => {

		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				new_line = Object.assign({}, line_GP)
				// Copier ici : paramétrage des champs du formulaire (group_repeat) à extraire et à copier dans la structure de données locale
				//   récupération de l'ID de la soumission principale (ici le N° du point de mesure = element["PTS_MES_NUM"] ) pour définir un ID unique pour chaque ligne
				//   indice dans le repeat => index dans la boucle : voir si utile, c'est plutot un N° = indice géré dans le formulaire (ajout) qui doit être utilisé
				// Il faut qu'il soit unique et maitrisé par utilisateur (ordre des mesures saisies)
				new_line["IND_ENREG"] = index
				new_line["IND_GP"] = index_GP
				// Données globales exploitation pour tous les groupes : Nom exploitation, nom exploitant, ..
				new_line["NUM_PTS"] = element["ID_EXPL_NOM_EXPLOITATION"]		
				new_line["NOM"] = element["ID_EXPL_NOM_EXPLOITANT"]				
				new_line["PRENOM"] = element["ID_EXPL_PRENOM_EXPLOITANT"]		
				new_line["DATE_DIAG"] = element["ID_EXPL_DATE_DIAGNOSTIC"]
				new_line["LETTRE"] = element["ID_EXPL_LETTRE"]		
				
				new_line["nomvar1"] = GP["FORM_GP_champ1"]
				new_line["nomvar2"] = GP["FORM_GP_champ2"]
				new_line["nomvarN"] = GP["FORM_GP_champN"]
				resultat["data_GPxxx"].push(new_line)
				nb_enreg++
			})
		}
		else
		{
			console.log("Pas de données " + nom_GP)
		}
	})
	console.log( "Nombre d'enreg GPxx : " + nb_enreg)
	return resultat;
}
// ********************************************************************************************************************
