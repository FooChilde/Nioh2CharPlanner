// Proof of Concept alert
	function proofOfConceptAlert() {
		alert("Hello and Welcome!\rThanks for checking out the page!\r\rA few notes here:\rAs of right now, this is merely a proof of concept, meaning the functionality of the planner is very, very limited. Currently the data collected only returns values up to level 15 in each stat. There are also some stats that aren't included, such as Attack/Defense and Current Encumbrance, as these will require data from -- idealy -- all weapons and armor in the game.\r\rThis version of the planner is just to show what I've written so far and to make sure my math and scripting checks out.\r\rIf you'd like to contribute to the project, feel free to message me (/u/michaellfoo) to see how you can help!\r\rThanks again, and stay tuned for updates!")
	}

// Round function for Defenses (to one decimal place)
	function round(value, precision) {
    	var multiplier = Math.pow(10, precision || 0);
    	return Math.round(value * multiplier) / multiplier;
	}

// Feature unavailable function
	function featureUnavailable() {
		alert("Sorry, this feature isn't available right now. Please check back at a later date!");
	}

// Starting build limit validation
	function validateStarting() {
	    var weaponCheckboxes = document.getElementsByName("startingWeapons");  
	    var numberOfCheckedWeapons = 0;  
	    for(var weaponsChecked = 0; weaponsChecked < weaponCheckboxes.length; weaponsChecked++) {  
	        if(weaponCheckboxes[weaponsChecked].checked)  
	            numberOfCheckedWeapons++;  
	    }  
	    if(numberOfCheckedWeapons > 2) {  
	        alert("You can't select more than two starting weapons!");  
	        return false;  
	    }
	    var spiritCheckboxes = document.getElementsByName("startingSpirit");  
	    var numberOfCheckedSpirits = 0;  
	    for(var spiritsChecked = 0; spiritsChecked < spiritCheckboxes.length; spiritsChecked++) {  
	        if(spiritCheckboxes[spiritsChecked].checked)  
	            numberOfCheckedSpirits++;  
	    }  
	    if(numberOfCheckedSpirits > 1) {  
	        alert("You can't select more than one starting Guardian Spirit!");  
	        return false;  
	    }
	    if(document.getElementById("startingSword").checked && document.getElementById("startingAme").checked) {
			baseHeart = 7;
		}	else if(document.getElementById("startingSword").checked || document.getElementById("startingAme").checked) {
		    	baseHeart = 6;
		    } 	else {
		    		baseHeart = 5;
		    	}
	    if(document.getElementById("startingSpear").checked) {
	    	baseConstitution = 6;
	    } 	else {
	    	baseConstitution = 5;
	    	}
	    if(document.getElementById("startingAxe").checked) {
	    	baseStamina = 6;
	    } 	else {
	    	baseStamina = 5;
	    	}
	    if(document.getElementById("startingTonfas").checked) {
	    	baseCourage = 6;
	    } 	else {
	    	baseCourage = 5;
	    	}
	    if(document.getElementById("startingOdachi").checked && document.getElementById("startingMakami").checked) {
			baseStrength = 7;
		}	else if(document.getElementById("startingOdachi").checked || document.getElementById("startingMakami").checked) {
		    	baseStrength = 6;
		    } 	else {
			    	baseStrength = 5;
		    	}
	    if(document.getElementById("startingKusarigama").checked) {
	    	baseDexterity = 6;
	    } 	else {
	    		baseDexterity = 5;
	    	}
	    if(document.getElementById("startingSwitchglaive").checked && document.getElementById("startingKagewani").checked) {
			baseMagic = 7;
		}	else if(document.getElementById("startingSwitchglaive").checked || document.getElementById("startingKagewani").checked) {
		    	baseMagic = 6;
		    } 	else {
			    	baseMagic = 5;
		    	}
		// Special case for conflicting starting weapons
		if(document.getElementById("startingDualSwords").checked && document.getElementById("startingHatchets").checked) {
			baseSkill = 7;
		}	else if (document.getElementById("startingDualSwords").checked || document.getElementById("startingHatchets").checked) {
				baseSkill = 6;
			}	else {
					baseSkill = 5;
				}
	    updateBuild();
	}

// General Stats Variables
	var baseConstitution = 5;
	var lvlConstitution = 0;
	var baseHeart = 5;
	var lvlHeart = 0;
	var baseCourage = 5;
	var lvlCourage = 0;
	var baseStamina = 5;
	var lvlStamina = 0;
	var baseStrength = 5;
	var lvlStrength = 0;
	var baseSkill = 5;
	var lvlSkill = 0;
	var baseDexterity = 5;
	var lvlDexterity = 0;
	var baseMagic = 5;
	var lvlMagic = 0;

// Affected Stats Variables
	//Base Numbers
		var baseLevel = 1;
		var baseLife = 880;
	  	var baseKi = 960;
	  	var baseKiRecovery = 294;
	  	var baseDefense = 0;
	  	var baseEquipmentWeightMax = 29.5;
	  	var baseKiPulse = 300;
	  	var baseNinjutsuPower = 10;
	  	var baseNinjutsuCapacity = 3;
	  	var baseOnmyoMagicPower = 10;
	  	var baseOnmyoMagicCapacity = 3;
	  	var baseDefenseFire = 0;
	  	var baseDefenseWater = 0;
	  	var baseDefenseLightning = 0;
	  	var baseDefensePoison = 0;
	  	var baseDefenseParalysis = 0;

	//Changed Numbers
		var lvlConstitution = 0;
		var lvlHeart = 0;
		var lvlCourage = 0;
		var lvlStamina = 0;
		var lvlStrength = 0;
		var lvlSkill = 0;
		var lvlDexterity = 0;
		var lvlMagic = 0;
		var statLifeConstitution;
		var statDefensePoisonConstitution;
		var statDefenseParalysisConstitution;
		var statKiHeart;
		var statKiRecoveryHeart;
		var statDefenseFireHeart;
		var statKiRecoveryCourage;
		var statOnmyoMagicPowerCourage;
		var statDefenseLightningCourage;
		var statLifeStamina;
		var statEquipmentWeightMaxStamina;
		var statEquipmentWeightMaxStrength;
		var statKiPulseStrength;
		var statDefenseWaterStrength;
		var statKiPulseSkill;
		var statNinjutsuPowerSkill;
		var statNinjutsuPowerDexterity;
		var statNinjutsuCapacityDexterity;
		var statDefensePoisonDexterity;
		var statDefenseParalysisDexterity;
		var statOnmyoMagicPowerMagic;
		var statOnmyoMagicCapacityMagic;

// Reset Function
	function statReset() {
		// Reset Leveled Stats
		lvlConstitution = 0;
		lvlHeart = 0;
		lvlCourage = 0;
		lvlStamina = 0;
		lvlStrength = 0;
		lvlSkill = 0;
		lvlDexterity = 0;
		lvlMagic = 0;
		// Uncheck Starting Weapons checkboxes
		var resetStartWeaponsItems = document.getElementsByName('startingWeapons');
        for (var i = 0; i < resetStartWeaponsItems.length; i++) {
            if (resetStartWeaponsItems[i].type == 'checkbox')
                resetStartWeaponsItems[i].checked = false;
        }
        // Uncheck Starting Spirit sheckboxes
        var resetStartSpiritItems = document.getElementsByName('startingSpirit');
        for (var i = 0; i < resetStartSpiritItems.length; i++) {
            if (resetStartSpiritItems[i].type == 'checkbox')
                resetStartSpiritItems[i].checked = false;
        }
        // Update build with starting checkboxes empty
        validateStarting();
		updateBuild();
	}

// Update Build Function
	function updateBuild() {
		if (((baseConstitution + baseHeart + baseCourage + baseStamina + baseStrength + baseSkill + baseDexterity + baseMagic) + (lvlConstitution + lvlHeart + lvlCourage + lvlStamina + lvlStrength + lvlSkill + lvlDexterity + lvlMagic) - 42) < 1) {
			document.getElementById("totalLevel").textContent = 1;
		}	else {
				document.getElementById("totalLevel").textContent = (baseConstitution + baseHeart + baseCourage + baseStamina + baseStrength + baseSkill + baseDexterity + baseMagic) + (lvlConstitution + lvlHeart + lvlCourage + lvlStamina + lvlStrength + lvlSkill + lvlDexterity + lvlMagic) - 42;
			}
		document.getElementById("totalConstitution").textContent = baseConstitution + lvlConstitution;
		document.getElementById("totalHeart").textContent = baseHeart + lvlHeart;
		document.getElementById("totalCourage").textContent = baseCourage + lvlCourage;
		document.getElementById("totalStamina").textContent = baseStamina + lvlStamina;
		document.getElementById("totalStrength").textContent = baseStrength + lvlStrength;
		document.getElementById("totalSkill").textContent = baseSkill + lvlSkill;
		document.getElementById("totalDexterity").textContent = baseDexterity + lvlDexterity;
		document.getElementById("totalMagic").textContent = baseMagic + lvlMagic;
		if ((870 + statLifeConstitution[baseConstitution + lvlConstitution] + statLifeStamina[baseStamina + lvlStamina]  + ((((baseConstitution + baseHeart + baseCourage + baseStamina + baseStrength + baseSkill + baseDexterity + baseMagic) + (lvlConstitution + lvlHeart + lvlCourage + lvlStamina + lvlStrength + lvlSkill + lvlDexterity + lvlMagic)) - 42) * 10)) < 880) {
			document.getElementById("totalLife").textContent = 880
		}	else {
				document.getElementById("totalLife").textContent = 870 + statLifeConstitution[baseConstitution + lvlConstitution] + statLifeStamina[baseStamina + lvlStamina]  + ((((baseConstitution + baseHeart + baseCourage + baseStamina + baseStrength + baseSkill + baseDexterity + baseMagic) + (lvlConstitution + lvlHeart + lvlCourage + lvlStamina + lvlStrength + lvlSkill + lvlDexterity + lvlMagic)) - 42) * 10);
			}
		document.getElementById("totalKi").textContent = baseKi + statKiHeart[baseHeart + lvlHeart];
		document.getElementById("totalKiRecovery").textContent = baseKiRecovery + statKiRecoveryHeart[baseHeart + lvlHeart] + statKiRecoveryCourage[baseCourage + lvlCourage];
		document.getElementById("totalEquipmentWeightMax").textContent = round(baseEquipmentWeightMax + statEquipmentWeightMaxStrength[baseStrength + lvlStrength] + statEquipmentWeightMaxStamina[baseStamina + lvlStamina], 1).toFixed(1);
		document.getElementById("totalKiPulse").textContent = baseKiPulse + statKiPulseStrength[baseStrength + lvlStrength] + statKiPulseSkill[baseSkill + lvlSkill];
	    document.getElementById("totalNinjutsuPower").textContent = baseNinjutsuPower + statNinjutsuPowerDexterity[baseDexterity + lvlDexterity] + statNinjutsuPowerSkill[baseSkill + lvlSkill];
	    document.getElementById("totalNinjutsuCapacity").textContent = baseNinjutsuCapacity + statNinjutsuCapacityDexterity[baseDexterity + lvlDexterity];
	    document.getElementById("totalOnmyoMagicPower").textContent = baseOnmyoMagicPower + statOnmyoMagicPowerMagic[baseMagic + lvlMagic] + statOnmyoMagicPowerCourage[baseCourage + lvlCourage];
	    document.getElementById("totalOnmyoMagicCapacity").textContent = baseOnmyoMagicCapacity + statOnmyoMagicCapacityMagic[baseMagic + lvlMagic];
		document.getElementById("totalOnmyoMagicPower").textContent = baseOnmyoMagicPower + statOnmyoMagicPowerCourage[baseCourage + lvlCourage] + statOnmyoMagicPowerMagic[baseMagic + lvlMagic];
		document.getElementById("totalDefenseFire").textContent = round(baseDefenseFire + statDefenseFireHeart[baseHeart + lvlHeart], 1).toFixed(1);
		document.getElementById("totalDefenseWater").textContent = round(baseDefenseWater + statDefenseWaterStrength[baseStrength + lvlStrength], 1).toFixed(1);
		document.getElementById("totalDefenseLightning").textContent = round(baseDefenseLightning + statDefenseLightningCourage[baseCourage + lvlCourage], 1).toFixed(1);
		document.getElementById("totalDefensePoison").textContent = round(baseDefensePoison + statDefensePoisonConstitution[baseConstitution + lvlConstitution] + statDefensePoisonDexterity[baseDexterity + lvlDexterity], 1).toFixed(1);
		document.getElementById("totalDefenseParalysis").textContent = round(baseDefenseParalysis + statDefenseParalysisConstitution[baseConstitution + lvlConstitution] + statDefenseParalysisDexterity[baseDexterity + lvlDexterity], 1).toFixed(1);
	}



// Start Constitution Section
	// Variables
		var statLifeConstitution = new Array();
		statLifeConstitution[0] = 0;
		statLifeConstitution[1] = 0;
		statLifeConstitution[2] = 0;
		statLifeConstitution[3] = 0;
		statLifeConstitution[4] = 0;
		statLifeConstitution[5] = 0;
		statLifeConstitution[6] = 30;
		statLifeConstitution[7] = 55;
		statLifeConstitution[8] = 80;
		statLifeConstitution[9] = 100;
		statLifeConstitution[10] = 120;
		statLifeConstitution[11] = 135;
		statLifeConstitution[12] = 150;
		statLifeConstitution[13] = 165;
		statLifeConstitution[14] = 180;
		statLifeConstitution[15] = 195;
		statLifeConstitution[16] = 210;
		statLifeConstitution[17] = 225;
		statLifeConstitution[18] = 240;
		statLifeConstitution[19] = 255;
		statLifeConstitution[20] = 270;
		statLifeConstitution[21] = 285;
		statLifeConstitution[22] = 300;
		statLifeConstitution[23] = 315;
		statLifeConstitution[24] = 330;
		statLifeConstitution[25] = 345;
		statLifeConstitution[26] = 360;
		statLifeConstitution[27] = 375;
		statLifeConstitution[28] = 390;
		statLifeConstitution[29] = 405;
		statLifeConstitution[30] = 420;
		statLifeConstitution[31] = 435;
		statLifeConstitution[32] = 450;
		statLifeConstitution[33] = 465;
		statLifeConstitution[34] = 480;
		statLifeConstitution[35] = 495;
		statLifeConstitution[36] = 510;
		statLifeConstitution[37] = 525;
		statLifeConstitution[38] = 540;
		statLifeConstitution[39] = 555;
		statLifeConstitution[40] = 570;
		statLifeConstitution[41] = 585;
		statLifeConstitution[42] = 600;
		statLifeConstitution[43] = 615;
		statLifeConstitution[44] = 630;
		statLifeConstitution[45] = 645;
		statLifeConstitution[46] = 660;
		statLifeConstitution[47] = 675;
		statLifeConstitution[48] = 690;
		statLifeConstitution[49] = 705;
		statLifeConstitution[50] = 720;
		statLifeConstitution[51] = 735;
		statLifeConstitution[52] = 750;
		statLifeConstitution[53] = 765;
		statLifeConstitution[54] = 780;
		statLifeConstitution[55] = 795;
		statLifeConstitution[56] = 810;
		statLifeConstitution[57] = 825;
		statLifeConstitution[58] = 840;
		statLifeConstitution[59] = 855;
		statLifeConstitution[60] = 870;
		statLifeConstitution[61] = 885;
		statLifeConstitution[62] = 900;
		statLifeConstitution[63] = 915;
		statLifeConstitution[64] = 930;
		statLifeConstitution[65] = 945;
		statLifeConstitution[66] = 960;
		statLifeConstitution[67] = 975;
		statLifeConstitution[68] = 990;
		statLifeConstitution[69] = 1005;
		statLifeConstitution[70] = 1020;
		statLifeConstitution[71] = 1035;
		statLifeConstitution[72] = 1050;
		statLifeConstitution[73] = 1065;
		statLifeConstitution[74] = 1080;
		statLifeConstitution[75] = 1095;

		var statDefensePoisonConstitution = new Array();
		statDefensePoisonConstitution[0] = 0.0;
		statDefensePoisonConstitution[1] = 0.0;
		statDefensePoisonConstitution[2] = 0.0;
		statDefensePoisonConstitution[3] = 0.0;
		statDefensePoisonConstitution[4] = 0.0;
		statDefensePoisonConstitution[5] = 0.0;
		statDefensePoisonConstitution[6] = 0.0;
		statDefensePoisonConstitution[7] = 0.5;
		statDefensePoisonConstitution[8] = 1.0;
		statDefensePoisonConstitution[9] = 1.5;
		statDefensePoisonConstitution[10] = 2.0;
		statDefensePoisonConstitution[11] = 2.4;
		statDefensePoisonConstitution[12] = 2.8;
		statDefensePoisonConstitution[13] = 3.2;
		statDefensePoisonConstitution[14] = 3.6;
		statDefensePoisonConstitution[15] = 4.0;
		statDefensePoisonConstitution[16] = 4.3;
		statDefensePoisonConstitution[17] = 4.6;
		statDefensePoisonConstitution[18] = 4.9;
		statDefensePoisonConstitution[19] = 5.2;
		statDefensePoisonConstitution[20] = 5.5;
		statDefensePoisonConstitution[21] = 5.7;
		statDefensePoisonConstitution[22] = 5.9;
		statDefensePoisonConstitution[23] = 6.1;
		statDefensePoisonConstitution[24] = 6.3;
		statDefensePoisonConstitution[25] = 6.5;
		statDefensePoisonConstitution[26] = 6.7;
		statDefensePoisonConstitution[27] = 6.9;
		statDefensePoisonConstitution[28] = 7.1;
		statDefensePoisonConstitution[29] = 7.3;
		statDefensePoisonConstitution[30] = 7.5;
		statDefensePoisonConstitution[31] = 7.7;
		statDefensePoisonConstitution[32] = 7.9;
		statDefensePoisonConstitution[33] = 8.1;
		statDefensePoisonConstitution[34] = 8.3;
		statDefensePoisonConstitution[35] = 8.5;
		statDefensePoisonConstitution[36] = 8.7;
		statDefensePoisonConstitution[37] = 8.9;
		statDefensePoisonConstitution[38] = 9.1;
		statDefensePoisonConstitution[39] = 9.3;
		statDefensePoisonConstitution[40] = 9.5;
		statDefensePoisonConstitution[41] = 9.6;
		statDefensePoisonConstitution[42] = 9.7;
		statDefensePoisonConstitution[43] = 9.8;
		statDefensePoisonConstitution[44] = 9.9;
		statDefensePoisonConstitution[45] = 10.0;
		statDefensePoisonConstitution[46] = 10.1;
		statDefensePoisonConstitution[47] = 10.2;
		statDefensePoisonConstitution[48] = 10.3;
		statDefensePoisonConstitution[49] = 10.4;
		statDefensePoisonConstitution[50] = 10.5;
		statDefensePoisonConstitution[51] = 10.6;
		statDefensePoisonConstitution[52] = 10.7;
		statDefensePoisonConstitution[53] = 10.8;
		statDefensePoisonConstitution[54] = 10.9;
		statDefensePoisonConstitution[55] = 11.0;
		statDefensePoisonConstitution[56] = 11.1;
		statDefensePoisonConstitution[57] = 11.2;
		statDefensePoisonConstitution[58] = 11.3;
		statDefensePoisonConstitution[59] = 11.4;
		statDefensePoisonConstitution[60] = 11.5;
		statDefensePoisonConstitution[61] = 11.6;
		statDefensePoisonConstitution[62] = 11.7;
		statDefensePoisonConstitution[63] = 11.8;
		statDefensePoisonConstitution[64] = 11.9;
		statDefensePoisonConstitution[65] = 12.0;
		statDefensePoisonConstitution[66] = 12.1;
		statDefensePoisonConstitution[67] = 12.2;
		statDefensePoisonConstitution[68] = 12.3;
		statDefensePoisonConstitution[69] = 12.4;
		statDefensePoisonConstitution[70] = 12.5;
		statDefensePoisonConstitution[71] = 12.6;
		statDefensePoisonConstitution[72] = 12.7;
		statDefensePoisonConstitution[73] = 12.8;
		statDefensePoisonConstitution[74] = 12.9;
		statDefensePoisonConstitution[75] = 13.0;

		var statDefenseParalysisConstitution = new Array();
		statDefenseParalysisConstitution[0] = 0.0;
		statDefenseParalysisConstitution[1] = 0.0;
		statDefenseParalysisConstitution[2] = 0.0;
		statDefenseParalysisConstitution[3] = 0.0;
		statDefenseParalysisConstitution[4] = 0.0;
		statDefenseParalysisConstitution[5] = 0.0;
		statDefenseParalysisConstitution[6] = 0.0;
		statDefenseParalysisConstitution[7] = 0.5;
		statDefenseParalysisConstitution[8] = 1.0;
		statDefenseParalysisConstitution[9] = 1.5;
		statDefenseParalysisConstitution[10] = 2.0;
		statDefenseParalysisConstitution[11] = 2.4;
		statDefenseParalysisConstitution[12] = 2.8;
		statDefenseParalysisConstitution[13] = 3.2;
		statDefenseParalysisConstitution[14] = 3.6;
		statDefenseParalysisConstitution[15] = 4.0;
		statDefenseParalysisConstitution[16] = 4.3;
		statDefenseParalysisConstitution[17] = 4.6;
		statDefenseParalysisConstitution[18] = 4.9;
		statDefenseParalysisConstitution[19] = 5.2;
		statDefenseParalysisConstitution[20] = 5.5;
		statDefenseParalysisConstitution[21] = 5.7;
		statDefenseParalysisConstitution[22] = 5.9;
		statDefenseParalysisConstitution[23] = 6.1;
		statDefenseParalysisConstitution[24] = 6.3;
		statDefenseParalysisConstitution[25] = 6.5;
		statDefenseParalysisConstitution[26] = 6.7;
		statDefenseParalysisConstitution[27] = 6.9;
		statDefenseParalysisConstitution[28] = 7.1;
		statDefenseParalysisConstitution[29] = 7.3;
		statDefenseParalysisConstitution[30] = 7.5;
		statDefenseParalysisConstitution[31] = 7.7;
		statDefenseParalysisConstitution[32] = 7.9;
		statDefenseParalysisConstitution[33] = 8.1;
		statDefenseParalysisConstitution[34] = 8.3;
		statDefenseParalysisConstitution[35] = 8.5;
		statDefenseParalysisConstitution[36] = 8.7;
		statDefenseParalysisConstitution[37] = 8.9;
		statDefenseParalysisConstitution[38] = 9.1;
		statDefenseParalysisConstitution[39] = 9.3;
		statDefenseParalysisConstitution[40] = 9.5;
		statDefenseParalysisConstitution[41] = 9.6;
		statDefenseParalysisConstitution[42] = 9.7;
		statDefenseParalysisConstitution[43] = 9.8;
		statDefenseParalysisConstitution[44] = 9.9;
		statDefenseParalysisConstitution[45] = 10.0;
		statDefenseParalysisConstitution[46] = 10.1;
		statDefenseParalysisConstitution[47] = 10.2;
		statDefenseParalysisConstitution[48] = 10.3;
		statDefenseParalysisConstitution[49] = 10.4;
		statDefenseParalysisConstitution[50] = 10.5;
		statDefenseParalysisConstitution[51] = 10.6;
		statDefenseParalysisConstitution[52] = 10.7;
		statDefenseParalysisConstitution[53] = 10.8;
		statDefenseParalysisConstitution[54] = 10.9;
		statDefenseParalysisConstitution[55] = 11.0;
		statDefenseParalysisConstitution[56] = 11.1;
		statDefenseParalysisConstitution[57] = 11.2;
		statDefenseParalysisConstitution[58] = 11.3;
		statDefenseParalysisConstitution[59] = 11.4;
		statDefenseParalysisConstitution[60] = 11.5;
		statDefenseParalysisConstitution[61] = 11.6;
		statDefenseParalysisConstitution[62] = 11.7;
		statDefenseParalysisConstitution[63] = 11.8;
		statDefenseParalysisConstitution[64] = 11.9;
		statDefenseParalysisConstitution[65] = 12.0;
		statDefenseParalysisConstitution[66] = 12.1;
		statDefenseParalysisConstitution[67] = 12.2;
		statDefenseParalysisConstitution[68] = 12.3;
		statDefenseParalysisConstitution[69] = 12.4;
		statDefenseParalysisConstitution[70] = 12.5;
		statDefenseParalysisConstitution[71] = 12.6;
		statDefenseParalysisConstitution[72] = 12.7;
		statDefenseParalysisConstitution[73] = 12.8;
		statDefenseParalysisConstitution[74] = 12.9;
		statDefenseParalysisConstitution[75] = 13.0;

	// Functions
		function updateConstitution() {
			document.getElementById("totalConstitution").textContent = baseConstitution + lvlConstitution;
		    document.getElementById("totalLife").textContent = baseLife + statLifeConstitution[baseConstitution + lvlConstitution] + statLifeStamina[baseStamina + lvlStamina] + (((lvlConstitution + lvlHeart + lvlCourage + lvlStamina + lvlStrength + lvlSkill + lvlDexterity + lvlMagic) - 3) * 10);
			document.getElementById("totalDefensePoison").textContent = round(baseDefensePoison + statDefensePoisonConstitution[baseConstitution + lvlConstitution] + statDefensePoisonDexterity[baseDexterity + lvlDexterity], 1).toFixed(1);
			document.getElementById("totalDefenseParalysis").textContent = round(baseDefenseParalysis + statDefenseParalysisConstitution[baseConstitution + lvlConstitution] + statDefenseParalysisDexterity[baseDexterity + lvlDexterity], 1).toFixed(1);
		    document.getElementById("totalLevel").textContent = (lvlConstitution + lvlHeart + lvlCourage + lvlStamina + lvlStrength + lvlSkill + lvlDexterity + lvlMagic) - 2;
		}

		function statConstitutionUp() {
			lvlConstitution += 1;
			updateBuild();
		}

		function statConstitutionDown() {
			lvlConstitution -= 1;
				if (lvlConstitution < 0){
					lvlConstitution = 0;
				}
			updateBuild();
		}

// End Constitution Section



// Start Heart Section
	// Variables
		var statKiHeart = new Array();
		statKiHeart[0] = 0;
		statKiHeart[1] = 0;
		statKiHeart[2] = 0;
		statKiHeart[3] = 0;
		statKiHeart[4] = 0;
		statKiHeart[5] = 0;
		statKiHeart[6] = 20;
		statKiHeart[7] = 40;
		statKiHeart[8] = 50;
		statKiHeart[9] = 60;
		statKiHeart[10] = 80;
		statKiHeart[11] = 90;
		statKiHeart[12] = 100;
		statKiHeart[13] = 110;
		statKiHeart[14] = 120;
		statKiHeart[15] = 135;
		statKiHeart[16] = 140;
		statKiHeart[17] = 145;
		statKiHeart[18] = 150;
		statKiHeart[19] = 155;
		statKiHeart[20] = 165;
		statKiHeart[21] = 169;
		statKiHeart[22] = 173;
		statKiHeart[23] = 177;
		statKiHeart[24] = 181;
		statKiHeart[25] = 189;
		statKiHeart[26] = 193;
		statKiHeart[27] = 197;
		statKiHeart[28] = 201;
		statKiHeart[29] = 205;
		statKiHeart[30] = 212;
		statKiHeart[31] = 215;
		statKiHeart[32] = 218;
		statKiHeart[33] = 221;
		statKiHeart[34] = 224;
		statKiHeart[35] = 227;
		statKiHeart[36] = 230;
		statKiHeart[37] = 233;
		statKiHeart[38] = 236;
		statKiHeart[39] = 239;
		statKiHeart[40] = 245;
		statKiHeart[41] = 248;
		statKiHeart[42] = 251;
		statKiHeart[43] = 254;
		statKiHeart[44] = 257;
		statKiHeart[45] = 260;
		statKiHeart[46] = 263;
		statKiHeart[47] = 266;
		statKiHeart[48] = 269;
		statKiHeart[49] = 272;
		statKiHeart[50] = 277;
		statKiHeart[51] = 279;
		statKiHeart[52] = 281;
		statKiHeart[53] = 283;
		statKiHeart[54] = 285;
		statKiHeart[55] = 287;
		statKiHeart[56] = 289;
		statKiHeart[57] = 291;
		statKiHeart[58] = 293;
		statKiHeart[59] = 295;
		statKiHeart[60] = 300;
		statKiHeart[61] = 302;
		statKiHeart[62] = 304;
		statKiHeart[63] = 306;
		statKiHeart[64] = 308;
		statKiHeart[65] = 310;
		statKiHeart[66] = 312;
		statKiHeart[67] = 314;
		statKiHeart[68] = 316;
		statKiHeart[69] = 318;
		statKiHeart[70] = 323;
		statKiHeart[71] = 325;
		statKiHeart[72] = 327;
		statKiHeart[73] = 329;
		statKiHeart[74] = 331;
		statKiHeart[75] = 333;

		var statKiRecoveryHeart = new Array();
		statKiRecoveryHeart[0] = 0;
		statKiRecoveryHeart[1] = 0;
		statKiRecoveryHeart[2] = 0;
		statKiRecoveryHeart[3] = 0;
		statKiRecoveryHeart[4] = 0;
		statKiRecoveryHeart[5] = 0;
		statKiRecoveryHeart[6] = 3;
		statKiRecoveryHeart[7] = 5;
		statKiRecoveryHeart[8] = 8;
		statKiRecoveryHeart[9] = 11;
		statKiRecoveryHeart[10] = 13;
		statKiRecoveryHeart[11] = 15;
		statKiRecoveryHeart[12] = 17;
		statKiRecoveryHeart[13] = 19;
		statKiRecoveryHeart[14] = 20;
		statKiRecoveryHeart[15] = 22;
		statKiRecoveryHeart[16] = 24;
		statKiRecoveryHeart[17] = 25;
		statKiRecoveryHeart[18] = 26;
		statKiRecoveryHeart[19] = 28;
		statKiRecoveryHeart[20] = 29;
		statKiRecoveryHeart[21] = 31;
		statKiRecoveryHeart[22] = 32;
		statKiRecoveryHeart[23] = 33;
		statKiRecoveryHeart[24] = 34;
		statKiRecoveryHeart[25] = 35;
		statKiRecoveryHeart[26] = 36;
		statKiRecoveryHeart[27] = 37;
		statKiRecoveryHeart[28] = 38;
		statKiRecoveryHeart[29] = 39;
		statKiRecoveryHeart[30] = 40;
		statKiRecoveryHeart[31] = 41;
		statKiRecoveryHeart[32] = 42;
		statKiRecoveryHeart[33] = 43;
		statKiRecoveryHeart[34] = 44;
		statKiRecoveryHeart[35] = 45;
		statKiRecoveryHeart[36] = 46;
		statKiRecoveryHeart[37] = 46;
		statKiRecoveryHeart[38] = 47;
		statKiRecoveryHeart[39] = 48;
		statKiRecoveryHeart[40] = 49;
		statKiRecoveryHeart[41] = 49;
		statKiRecoveryHeart[42] = 50;
		statKiRecoveryHeart[43] = 50;
		statKiRecoveryHeart[44] = 51;
		statKiRecoveryHeart[45] = 51;
		statKiRecoveryHeart[46] = 52;
		statKiRecoveryHeart[47] = 52;
		statKiRecoveryHeart[48] = 53;
		statKiRecoveryHeart[49] = 53;
		statKiRecoveryHeart[50] = 54;
		statKiRecoveryHeart[51] = 54;
		statKiRecoveryHeart[52] = 54;
		statKiRecoveryHeart[53] = 55;
		statKiRecoveryHeart[54] = 55;
		statKiRecoveryHeart[55] = 55;
		statKiRecoveryHeart[56] = 55;
		statKiRecoveryHeart[57] = 56;
		statKiRecoveryHeart[58] = 56;
		statKiRecoveryHeart[59] = 56;
		statKiRecoveryHeart[60] = 57;
		statKiRecoveryHeart[61] = 57;
		statKiRecoveryHeart[62] = 57;
		statKiRecoveryHeart[63] = 57;
		statKiRecoveryHeart[64] = 58;
		statKiRecoveryHeart[65] = 58;
		statKiRecoveryHeart[66] = 58;
		statKiRecoveryHeart[67] = 59;
		statKiRecoveryHeart[68] = 59;
		statKiRecoveryHeart[69] = 59;
		statKiRecoveryHeart[70] = 60;
		statKiRecoveryHeart[71] = 60;
		statKiRecoveryHeart[72] = 60;
		statKiRecoveryHeart[73] = 60;
		statKiRecoveryHeart[74] = 61;
		statKiRecoveryHeart[75] = 61;

		var statDefenseFireHeart = new Array();
		statDefenseFireHeart[0] = 0.0;
		statDefenseFireHeart[1] = 0.0;
		statDefenseFireHeart[2] = 0.0;
		statDefenseFireHeart[3] = 0.0;
		statDefenseFireHeart[4] = 0.0;
		statDefenseFireHeart[5] = 0.0;
		statDefenseFireHeart[6] = 0.0;
		statDefenseFireHeart[7] = 0.5;
		statDefenseFireHeart[8] = 1.0;
		statDefenseFireHeart[9] = 1.5;
		statDefenseFireHeart[10] = 2.0;
		statDefenseFireHeart[11] = 2.4;
		statDefenseFireHeart[12] = 2.8;
		statDefenseFireHeart[13] = 3.2;
		statDefenseFireHeart[14] = 3.6;
		statDefenseFireHeart[15] = 4.0;
		statDefenseFireHeart[16] = 4.3;
		statDefenseFireHeart[17] = 4.6;
		statDefenseFireHeart[18] = 4.9;
		statDefenseFireHeart[19] = 5.2;
		statDefenseFireHeart[20] = 5.5;
		statDefenseFireHeart[21] = 5.7;
		statDefenseFireHeart[22] = 5.9;
		statDefenseFireHeart[23] = 6.1;
		statDefenseFireHeart[24] = 6.3;
		statDefenseFireHeart[25] = 6.5;
		statDefenseFireHeart[26] = 6.7;
		statDefenseFireHeart[27] = 6.9;
		statDefenseFireHeart[28] = 7.1;
		statDefenseFireHeart[29] = 7.3;
		statDefenseFireHeart[30] = 7.5;
		statDefenseFireHeart[31] = 7.7;
		statDefenseFireHeart[32] = 7.9;
		statDefenseFireHeart[33] = 8.1;
		statDefenseFireHeart[34] = 8.3;
		statDefenseFireHeart[35] = 8.5;
		statDefenseFireHeart[36] = 8.7;
		statDefenseFireHeart[37] = 8.9;
		statDefenseFireHeart[38] = 9.1;
		statDefenseFireHeart[39] = 9.3;
		statDefenseFireHeart[40] = 9.5;
		statDefenseFireHeart[41] = 9.6;
		statDefenseFireHeart[42] = 9.7;
		statDefenseFireHeart[43] = 9.8;
		statDefenseFireHeart[44] = 9.9;
		statDefenseFireHeart[45] = 10.0;
		statDefenseFireHeart[46] = 10.1;
		statDefenseFireHeart[47] = 10.2;
		statDefenseFireHeart[48] = 10.3;
		statDefenseFireHeart[49] = 10.4;
		statDefenseFireHeart[50] = 10.5;
		statDefenseFireHeart[51] = 10.6;
		statDefenseFireHeart[52] = 10.7;
		statDefenseFireHeart[53] = 10.8;
		statDefenseFireHeart[54] = 10.9;
		statDefenseFireHeart[55] = 11.0;
		statDefenseFireHeart[56] = 11.1;
		statDefenseFireHeart[57] = 11.2;
		statDefenseFireHeart[58] = 11.3;
		statDefenseFireHeart[59] = 11.4;
		statDefenseFireHeart[60] = 11.5;
		statDefenseFireHeart[61] = 11.6;
		statDefenseFireHeart[62] = 11.7;
		statDefenseFireHeart[63] = 11.8;
		statDefenseFireHeart[64] = 11.9;
		statDefenseFireHeart[65] = 12.0;
		statDefenseFireHeart[66] = 12.1;
		statDefenseFireHeart[67] = 12.2;
		statDefenseFireHeart[68] = 12.3;
		statDefenseFireHeart[69] = 12.4;
		statDefenseFireHeart[70] = 12.5;
		statDefenseFireHeart[71] = 12.6;
		statDefenseFireHeart[72] = 12.7;
		statDefenseFireHeart[73] = 12.8;
		statDefenseFireHeart[74] = 12.9;
		statDefenseFireHeart[75] = 13.0;

	// Functions
		function updateHeart() {
			document.getElementById("totalHeart").textContent = baseHeart + lvlHeart;
			document.getElementById("totalLife").textContent = baseLife + statLifeConstitution[baseConstitution + lvlConstitution] + statLifeStamina[baseStamina + lvlStamina] + (((lvlConstitution + lvlHeart + lvlCourage + lvlStamina + lvlStrength + lvlSkill + lvlDexterity + lvlMagic) - 3) * 10);
			document.getElementById("totalKi").textContent = baseKi + statKiHeart[baseHeart + lvlHeart];
			document.getElementById("totalKiRecovery").textContent = baseKiRecovery + statKiRecoveryHeart[baseHeart + lvlHeart] + statKiRecoveryCourage[baseCourage + lvlCourage];
			document.getElementById("totalDefenseFire").textContent = round(baseDefenseFire + statDefenseFireHeart[baseHeart + lvlHeart], 1).toFixed(1);
		    document.getElementById("totalLevel").textContent = (lvlConstitution + lvlHeart + lvlCourage + lvlStamina + lvlStrength + lvlSkill + lvlDexterity + lvlMagic) - 2;
		}

		function statHeartUp() {
			lvlHeart += 1;
			updateBuild();
		}

		function statHeartDown() {
			lvlHeart -= 1;
				if (lvlHeart < 0){
					lvlHeart = 0;
				}
			updateBuild();
		}

// End Heart Section



// Start Courage Section
	// Variables
		var statKiRecoveryCourage = new Array();
		statKiRecoveryCourage[0] = 0;
		statKiRecoveryCourage[1] = 0;
		statKiRecoveryCourage[2] = 0;
		statKiRecoveryCourage[3] = 0;
		statKiRecoveryCourage[4] = 0;
		statKiRecoveryCourage[5] = 0;
		statKiRecoveryCourage[6] = 6;
		statKiRecoveryCourage[7] = 11;
		statKiRecoveryCourage[8] = 16;
		statKiRecoveryCourage[9] = 21;
		statKiRecoveryCourage[10] = 27;
		statKiRecoveryCourage[11] = 30;
		statKiRecoveryCourage[12] = 34;
		statKiRecoveryCourage[13] = 37;
		statKiRecoveryCourage[14] = 41;
		statKiRecoveryCourage[15] = 44;
		statKiRecoveryCourage[16] = 47;
		statKiRecoveryCourage[17] = 50;
		statKiRecoveryCourage[18] = 53;
		statKiRecoveryCourage[19] = 56;
		statKiRecoveryCourage[20] = 59;
		statKiRecoveryCourage[21] = 62;
		statKiRecoveryCourage[22] = 64;
		statKiRecoveryCourage[23] = 67;
		statKiRecoveryCourage[24] = 70;
		statKiRecoveryCourage[25] = 72;
		statKiRecoveryCourage[26] = 75;
		statKiRecoveryCourage[27] = 77;
		statKiRecoveryCourage[28] = 79;
		statKiRecoveryCourage[29] = 82;
		statKiRecoveryCourage[30] = 84;
		statKiRecoveryCourage[31] = 86;
		statKiRecoveryCourage[32] = 88;
		statKiRecoveryCourage[33] = 90;
		statKiRecoveryCourage[34] = 92;
		statKiRecoveryCourage[35] = 94;
		statKiRecoveryCourage[36] = 96;
		statKiRecoveryCourage[37] = 98;
		statKiRecoveryCourage[38] = 100;
		statKiRecoveryCourage[39] = 102;
		statKiRecoveryCourage[40] = 104;
		statKiRecoveryCourage[41] = 106;
		statKiRecoveryCourage[42] = 107;
		statKiRecoveryCourage[43] = 109;
		statKiRecoveryCourage[44] = 111;
		statKiRecoveryCourage[45] = 113;
		statKiRecoveryCourage[46] = 114;
		statKiRecoveryCourage[47] = 116;
		statKiRecoveryCourage[48] = 117;
		statKiRecoveryCourage[49] = 119;
		statKiRecoveryCourage[50] = 120;
		statKiRecoveryCourage[51] = 121;
		statKiRecoveryCourage[52] = 122;
		statKiRecoveryCourage[53] = 124;
		statKiRecoveryCourage[54] = 125;
		statKiRecoveryCourage[55] = 126;
		statKiRecoveryCourage[56] = 127;
		statKiRecoveryCourage[57] = 128;
		statKiRecoveryCourage[58] = 130;
		statKiRecoveryCourage[59] = 131;
		statKiRecoveryCourage[60] = 132;
		statKiRecoveryCourage[61] = 133;
		statKiRecoveryCourage[62] = 134;
		statKiRecoveryCourage[63] = 135;
		statKiRecoveryCourage[64] = 137;
		statKiRecoveryCourage[65] = 138;
		statKiRecoveryCourage[66] = 139;
		statKiRecoveryCourage[67] = 140;
		statKiRecoveryCourage[68] = 141;
		statKiRecoveryCourage[69] = 142;
		statKiRecoveryCourage[70] = 144;
		statKiRecoveryCourage[71] = 144;
		statKiRecoveryCourage[72] = 145;
		statKiRecoveryCourage[73] = 146;
		statKiRecoveryCourage[74] = 147;
		statKiRecoveryCourage[75] = 148;

		var statOnmyoMagicPowerCourage = new Array();
		statOnmyoMagicPowerCourage[0] = 0;
		statOnmyoMagicPowerCourage[1] = 0;
		statOnmyoMagicPowerCourage[2] = 0;
		statOnmyoMagicPowerCourage[3] = 0;
		statOnmyoMagicPowerCourage[4] = 0;
		statOnmyoMagicPowerCourage[5] = 0;
		statOnmyoMagicPowerCourage[6] = 3;
		statOnmyoMagicPowerCourage[7] = 6;
		statOnmyoMagicPowerCourage[8] = 8;
		statOnmyoMagicPowerCourage[9] = 10;
		statOnmyoMagicPowerCourage[10] = 11;
		statOnmyoMagicPowerCourage[11] = 12;
		statOnmyoMagicPowerCourage[12] = 13;
		statOnmyoMagicPowerCourage[13] = 14;
		statOnmyoMagicPowerCourage[14] = 15;
		statOnmyoMagicPowerCourage[15] = 16;
		statOnmyoMagicPowerCourage[16] = 17;
		statOnmyoMagicPowerCourage[17] = 18;
		statOnmyoMagicPowerCourage[18] = 19;
		statOnmyoMagicPowerCourage[19] = 20;
		statOnmyoMagicPowerCourage[20] = 21;
		statOnmyoMagicPowerCourage[21] = 22;
		statOnmyoMagicPowerCourage[22] = 23;
		statOnmyoMagicPowerCourage[23] = 24;
		statOnmyoMagicPowerCourage[24] = 25;
		statOnmyoMagicPowerCourage[25] = 26;
		statOnmyoMagicPowerCourage[26] = 27;
		statOnmyoMagicPowerCourage[27] = 28;
		statOnmyoMagicPowerCourage[28] = 29;
		statOnmyoMagicPowerCourage[29] = 30;
		statOnmyoMagicPowerCourage[30] = 31;
		statOnmyoMagicPowerCourage[31] = 32;
		statOnmyoMagicPowerCourage[32] = 33;
		statOnmyoMagicPowerCourage[33] = 34;
		statOnmyoMagicPowerCourage[34] = 35;
		statOnmyoMagicPowerCourage[35] = 36;
		statOnmyoMagicPowerCourage[36] = 37;
		statOnmyoMagicPowerCourage[37] = 38;
		statOnmyoMagicPowerCourage[38] = 39;
		statOnmyoMagicPowerCourage[39] = 40;
		statOnmyoMagicPowerCourage[40] = 41;
		statOnmyoMagicPowerCourage[41] = 42;
		statOnmyoMagicPowerCourage[42] = 43;
		statOnmyoMagicPowerCourage[43] = 44;
		statOnmyoMagicPowerCourage[44] = 45;
		statOnmyoMagicPowerCourage[45] = 46;
		statOnmyoMagicPowerCourage[46] = 47;
		statOnmyoMagicPowerCourage[47] = 48;
		statOnmyoMagicPowerCourage[48] = 49;
		statOnmyoMagicPowerCourage[49] = 50;
		statOnmyoMagicPowerCourage[50] = 51;
		statOnmyoMagicPowerCourage[51] = 52;
		statOnmyoMagicPowerCourage[52] = 53;
		statOnmyoMagicPowerCourage[53] = 54;
		statOnmyoMagicPowerCourage[54] = 55;
		statOnmyoMagicPowerCourage[55] = 56;
		statOnmyoMagicPowerCourage[56] = 57;
		statOnmyoMagicPowerCourage[57] = 58;
		statOnmyoMagicPowerCourage[58] = 59;
		statOnmyoMagicPowerCourage[59] = 60;
		statOnmyoMagicPowerCourage[60] = 61;
		statOnmyoMagicPowerCourage[61] = 62;
		statOnmyoMagicPowerCourage[62] = 63;
		statOnmyoMagicPowerCourage[63] = 64;
		statOnmyoMagicPowerCourage[64] = 65;
		statOnmyoMagicPowerCourage[65] = 66;
		statOnmyoMagicPowerCourage[66] = 67;
		statOnmyoMagicPowerCourage[67] = 68;
		statOnmyoMagicPowerCourage[68] = 69;
		statOnmyoMagicPowerCourage[69] = 70;
		statOnmyoMagicPowerCourage[70] = 71;
		statOnmyoMagicPowerCourage[71] = 72;
		statOnmyoMagicPowerCourage[72] = 73;
		statOnmyoMagicPowerCourage[73] = 74;
		statOnmyoMagicPowerCourage[74] = 75;
		statOnmyoMagicPowerCourage[75] = 76;

		var statDefenseLightningCourage = new Array();
		statDefenseLightningCourage[0] = 0.0;
		statDefenseLightningCourage[1] = 0.0;
		statDefenseLightningCourage[2] = 0.0;
		statDefenseLightningCourage[3] = 0.0;
		statDefenseLightningCourage[4] = 0.0;
		statDefenseLightningCourage[5] = 0.0;
		statDefenseLightningCourage[6] = 0.5;
		statDefenseLightningCourage[7] = 1.0;
		statDefenseLightningCourage[8] = 1.5;
		statDefenseLightningCourage[9] = 2.0;
		statDefenseLightningCourage[10] = 2.4;
		statDefenseLightningCourage[11] = 2.8;
		statDefenseLightningCourage[12] = 3.2;
		statDefenseLightningCourage[13] = 3.6;
		statDefenseLightningCourage[14] = 4.0;
		statDefenseLightningCourage[15] = 4.3;
		statDefenseLightningCourage[16] = 4.6;
		statDefenseLightningCourage[17] = 4.9;
		statDefenseLightningCourage[18] = 5.2;
		statDefenseLightningCourage[19] = 5.5;
		statDefenseLightningCourage[20] = 5.7;
		statDefenseLightningCourage[21] = 5.9;
		statDefenseLightningCourage[22] = 6.1;
		statDefenseLightningCourage[23] = 6.3;
		statDefenseLightningCourage[24] = 6.5;
		statDefenseLightningCourage[25] = 6.7;
		statDefenseLightningCourage[26] = 6.9;
		statDefenseLightningCourage[27] = 7.1;
		statDefenseLightningCourage[28] = 7.3;
		statDefenseLightningCourage[29] = 7.5;
		statDefenseLightningCourage[30] = 7.7;
		statDefenseLightningCourage[31] = 7.9;
		statDefenseLightningCourage[32] = 8.1;
		statDefenseLightningCourage[33] = 8.3;
		statDefenseLightningCourage[34] = 8.5;
		statDefenseLightningCourage[35] = 8.7;
		statDefenseLightningCourage[36] = 8.9;
		statDefenseLightningCourage[37] = 9.1;
		statDefenseLightningCourage[38] = 9.3;
		statDefenseLightningCourage[39] = 9.5;
		statDefenseLightningCourage[40] = 9.6;
		statDefenseLightningCourage[41] = 9.7;
		statDefenseLightningCourage[42] = 9.8;
		statDefenseLightningCourage[43] = 9.9;
		statDefenseLightningCourage[44] = 10.0;
		statDefenseLightningCourage[45] = 10.1;
		statDefenseLightningCourage[46] = 10.2;
		statDefenseLightningCourage[47] = 10.3;
		statDefenseLightningCourage[48] = 10.4;
		statDefenseLightningCourage[49] = 10.5;
		statDefenseLightningCourage[50] = 10.6;
		statDefenseLightningCourage[51] = 10.7;
		statDefenseLightningCourage[52] = 10.8;
		statDefenseLightningCourage[53] = 10.9;
		statDefenseLightningCourage[54] = 11.0;
		statDefenseLightningCourage[55] = 11.1;
		statDefenseLightningCourage[56] = 11.2;
		statDefenseLightningCourage[57] = 11.3;
		statDefenseLightningCourage[58] = 11.4;
		statDefenseLightningCourage[59] = 11.5;
		statDefenseLightningCourage[60] = 11.6;
		statDefenseLightningCourage[61] = 11.7;
		statDefenseLightningCourage[62] = 11.8;
		statDefenseLightningCourage[63] = 11.9;
		statDefenseLightningCourage[64] = 12.0;
		statDefenseLightningCourage[65] = 12.1;
		statDefenseLightningCourage[66] = 12.2;
		statDefenseLightningCourage[67] = 12.3;
		statDefenseLightningCourage[68] = 12.4;
		statDefenseLightningCourage[69] = 12.5;
		statDefenseLightningCourage[70] = 12.6;
		statDefenseLightningCourage[71] = 12.7;
		statDefenseLightningCourage[72] = 12.8;
		statDefenseLightningCourage[73] = 12.9;
		statDefenseLightningCourage[74] = 13.0;
		statDefenseLightningCourage[75] = 13.1;

	// Functions
		function updtateCourage() {
			document.getElementById("totalCourage").textContent = baseCourage + lvlCourage;
		    document.getElementById("totalLife").textContent = baseLife + statLifeConstitution[baseConstitution + lvlConstitution] + statLifeStamina[baseStamina + lvlStamina] + (((lvlConstitution + lvlHeart + lvlCourage + lvlStamina + lvlStrength + lvlSkill + lvlDexterity + lvlMagic) - 3) * 10);
			document.getElementById("totalOnmyoMagicPower").textContent = baseOnmyoMagicPower + statOnmyoMagicPowerCourage[baseCourage + lvlCourage] + statOnmyoMagicPowerMagic[baseMagic + lvlMagic];
			document.getElementById("totalKiRecovery").textContent = baseKiRecovery + statKiRecoveryCourage[baseCourage + lvlCourage] + statKiRecoveryHeart[baseHeart + lvlHeart];
			document.getElementById("totalDefenseLightning").textContent = round(baseDefenseLightning + statDefenseLightningCourage[baseCourage + lvlCourage], 1).toFixed(1);
		    document.getElementById("totalLevel").textContent = (lvlConstitution + lvlHeart + lvlCourage + lvlStamina + lvlStrength + lvlSkill + lvlDexterity + lvlMagic) - 2;
		}

		function statCourageUp() {
			lvlCourage += 1;
			updateBuild();
		}

		function statCourageDown() {
			lvlCourage -= 1;
				if (lvlCourage < 0){
					lvlCourage = 0;
				}
			updateBuild();
		}

// End Courage Section



// Start Stamina Section
	// Variables
		var statLifeStamina = new Array();
		statLifeStamina[0] = 0;
		statLifeStamina[1] = 0;
		statLifeStamina[2] = 0;
		statLifeStamina[3] = 0;
		statLifeStamina[4] = 0;
		statLifeStamina[5] = 0;
		statLifeStamina[6] = 15;
		statLifeStamina[7] = 30;
		statLifeStamina[8] = 40;
		statLifeStamina[9] = 55;
		statLifeStamina[10] = 65;
		statLifeStamina[11] = 70;
		statLifeStamina[12] = 75;
		statLifeStamina[13] = 80;
		statLifeStamina[14] = 85;
		statLifeStamina[15] = 90;
		statLifeStamina[16] = 95;
		statLifeStamina[17] = 100;
		statLifeStamina[18] = 105;
		statLifeStamina[19] = 110;
		statLifeStamina[20] = 115;
		statLifeStamina[21] = 120;
		statLifeStamina[22] = 125;
		statLifeStamina[23] = 130;
		statLifeStamina[24] = 135;
		statLifeStamina[25] = 140;
		statLifeStamina[26] = 145;
		statLifeStamina[27] = 150;
		statLifeStamina[28] = 155;
		statLifeStamina[29] = 160;
		statLifeStamina[30] = 165;
		statLifeStamina[31] = 170;
		statLifeStamina[32] = 175;
		statLifeStamina[33] = 180;
		statLifeStamina[34] = 185;
		statLifeStamina[35] = 190;
		statLifeStamina[36] = 195;
		statLifeStamina[37] = 200;
		statLifeStamina[38] = 205;
		statLifeStamina[39] = 210;
		statLifeStamina[40] = 215;
		statLifeStamina[41] = 220;
		statLifeStamina[42] = 225;
		statLifeStamina[43] = 230;
		statLifeStamina[44] = 235;
		statLifeStamina[45] = 240;
		statLifeStamina[46] = 245;
		statLifeStamina[47] = 250;
		statLifeStamina[48] = 255;
		statLifeStamina[49] = 260;
		statLifeStamina[50] = 265;
		statLifeStamina[51] = 270;
		statLifeStamina[52] = 275;
		statLifeStamina[53] = 280;
		statLifeStamina[54] = 285;
		statLifeStamina[55] = 290;
		statLifeStamina[56] = 295;
		statLifeStamina[57] = 300;
		statLifeStamina[58] = 305;
		statLifeStamina[59] = 310;
		statLifeStamina[60] = 315;
		statLifeStamina[61] = 320;
		statLifeStamina[62] = 325;
		statLifeStamina[63] = 330;
		statLifeStamina[64] = 335;
		statLifeStamina[65] = 340;
		statLifeStamina[66] = 345;
		statLifeStamina[67] = 350;
		statLifeStamina[68] = 355;
		statLifeStamina[69] = 360;
		statLifeStamina[70] = 365;
		statLifeStamina[71] = 370;
		statLifeStamina[72] = 375;
		statLifeStamina[73] = 380;
		statLifeStamina[74] = 385;
		statLifeStamina[75] = 390;

		var statEquipmentWeightMaxStamina = new Array();
		statEquipmentWeightMaxStamina[0] = 0.0;
		statEquipmentWeightMaxStamina[1] = 0.0;
		statEquipmentWeightMaxStamina[2] = 0.0;
		statEquipmentWeightMaxStamina[3] = 0.0;
		statEquipmentWeightMaxStamina[4] = 0.0;
		statEquipmentWeightMaxStamina[5] = 0.0;
		statEquipmentWeightMaxStamina[6] = 1.0;
		statEquipmentWeightMaxStamina[7] = 1.9;
		statEquipmentWeightMaxStamina[8] = 2.8;
		statEquipmentWeightMaxStamina[9] = 3.6;
		statEquipmentWeightMaxStamina[10] = 4.4;
		statEquipmentWeightMaxStamina[11] = 5.1;
		statEquipmentWeightMaxStamina[12] = 5.8;
		statEquipmentWeightMaxStamina[13] = 6.4;
		statEquipmentWeightMaxStamina[14] = 7.0;
		statEquipmentWeightMaxStamina[15] = 7.5;
		statEquipmentWeightMaxStamina[16] = 8.1;
		statEquipmentWeightMaxStamina[17] = 8.6;
		statEquipmentWeightMaxStamina[18] = 9.1;
		statEquipmentWeightMaxStamina[19] = 9.7;
		statEquipmentWeightMaxStamina[20] = 10.2;
		statEquipmentWeightMaxStamina[21] = 10.7;
		statEquipmentWeightMaxStamina[22] = 11.2;
		statEquipmentWeightMaxStamina[23] = 11.6;
		statEquipmentWeightMaxStamina[24] = 12.1;
		statEquipmentWeightMaxStamina[25] = 12.5;
		statEquipmentWeightMaxStamina[26] = 12.9;
		statEquipmentWeightMaxStamina[27] = 13.4;
		statEquipmentWeightMaxStamina[28] = 13.8;
		statEquipmentWeightMaxStamina[29] = 14.2;
		statEquipmentWeightMaxStamina[30] = 14.6;
		statEquipmentWeightMaxStamina[31] = 14.9;
		statEquipmentWeightMaxStamina[32] = 15.3;
		statEquipmentWeightMaxStamina[33] = 15.6;
		statEquipmentWeightMaxStamina[34] = 15.9;
		statEquipmentWeightMaxStamina[35] = 16.3;
		statEquipmentWeightMaxStamina[36] = 16.6;
		statEquipmentWeightMaxStamina[37] = 16.9;
		statEquipmentWeightMaxStamina[38] = 17.2;
		statEquipmentWeightMaxStamina[39] = 17.4;
		statEquipmentWeightMaxStamina[40] = 17.7;
		statEquipmentWeightMaxStamina[41] = 17.9;
		statEquipmentWeightMaxStamina[42] = 18.1;
		statEquipmentWeightMaxStamina[43] = 18.4;
		statEquipmentWeightMaxStamina[44] = 18.6;
		statEquipmentWeightMaxStamina[45] = 18.8;
		statEquipmentWeightMaxStamina[46] = 19.0;
		statEquipmentWeightMaxStamina[47] = 19.1;
		statEquipmentWeightMaxStamina[48] = 19.3;
		statEquipmentWeightMaxStamina[49] = 19.4;
		statEquipmentWeightMaxStamina[50] = 19.5;
		statEquipmentWeightMaxStamina[51] = 19.7;
		statEquipmentWeightMaxStamina[52] = 19.8;
		statEquipmentWeightMaxStamina[53] = 19.9;
		statEquipmentWeightMaxStamina[54] = 20.0;
		statEquipmentWeightMaxStamina[55] = 20.1;
		statEquipmentWeightMaxStamina[56] = 20.2;
		statEquipmentWeightMaxStamina[57] = 20.3;
		statEquipmentWeightMaxStamina[58] = 20.4;
		statEquipmentWeightMaxStamina[59] = 20.5;
		statEquipmentWeightMaxStamina[60] = 20.6;
		statEquipmentWeightMaxStamina[61] = 20.7;
		statEquipmentWeightMaxStamina[62] = 20.8;
		statEquipmentWeightMaxStamina[63] = 20.9;
		statEquipmentWeightMaxStamina[64] = 21.0;
		statEquipmentWeightMaxStamina[65] = 21.1;
		statEquipmentWeightMaxStamina[66] = 21.2;
		statEquipmentWeightMaxStamina[67] = 21.3;
		statEquipmentWeightMaxStamina[68] = 21.4;
		statEquipmentWeightMaxStamina[69] = 21.5;
		statEquipmentWeightMaxStamina[70] = 21.6;
		statEquipmentWeightMaxStamina[71] = 21.7;
		statEquipmentWeightMaxStamina[72] = 21.8;
		statEquipmentWeightMaxStamina[73] = 21.9;
		statEquipmentWeightMaxStamina[74] = 22.0;
		statEquipmentWeightMaxStamina[75] = 22.1;

	// Functions
		function updateStamina() {
			document.getElementById("totalStamina").textContent = baseStamina + lvlStamina;
		    document.getElementById("totalLife").textContent = baseLife + statLifeConstitution[baseConstitution + lvlConstitution] + statLifeStamina[baseStamina + lvlStamina] + (((lvlConstitution + lvlHeart + lvlCourage + lvlStamina + lvlStrength + lvlSkill + lvlDexterity + lvlMagic) - 3) * 10);
			document.getElementById("totalEquipmentWeightMax").textContent = round(baseEquipmentWeightMax + statEquipmentWeightMaxStrength[baseStrength + lvlStrength] + statEquipmentWeightMaxStamina[baseStamina + lvlStamina], 1).toFixed(1);
		    document.getElementById("totalLevel").textContent = (lvlConstitution + lvlHeart + lvlCourage + lvlStamina + lvlStrength + lvlSkill + lvlDexterity + lvlMagic) - 2;
		}

		function statStaminaUp() {
			lvlStamina += 1;
			updateBuild();
		}

		function statStaminaDown() {
			lvlStamina -= 1;
				if (lvlStamina < 0){
					lvlStamina = 0;
				}
			updateBuild();
		}

// End Stamina Section



// Start Strength Section
	// Variables
		var statEquipmentWeightMaxStrength = new Array();
		statEquipmentWeightMaxStrength[0] = 0.0;
		statEquipmentWeightMaxStrength[1] = 0.0;
		statEquipmentWeightMaxStrength[2] = 0.0;
		statEquipmentWeightMaxStrength[3] = 0.0;
		statEquipmentWeightMaxStrength[4] = 0.0;
		statEquipmentWeightMaxStrength[5] = 0.0;
		statEquipmentWeightMaxStrength[6] = 0.1;
		statEquipmentWeightMaxStrength[7] = 0.1;
		statEquipmentWeightMaxStrength[8] = 0.2;
		statEquipmentWeightMaxStrength[9] = 0.3;
		statEquipmentWeightMaxStrength[10] = 0.4;
		statEquipmentWeightMaxStrength[11] = 0.4;
		statEquipmentWeightMaxStrength[12] = 0.5;
		statEquipmentWeightMaxStrength[13] = 0.6;
		statEquipmentWeightMaxStrength[14] = 0.6;
		statEquipmentWeightMaxStrength[15] = 0.7;
		statEquipmentWeightMaxStrength[16] = 0.7;
		statEquipmentWeightMaxStrength[17] = 0.7;
		statEquipmentWeightMaxStrength[18] = 0.8;
		statEquipmentWeightMaxStrength[19] = 0.8;
		statEquipmentWeightMaxStrength[20] = 0.8;
		statEquipmentWeightMaxStrength[21] = 0.8;
		statEquipmentWeightMaxStrength[22] = 0.9;
		statEquipmentWeightMaxStrength[23] = 0.9;
		statEquipmentWeightMaxStrength[24] = 0.9;
		statEquipmentWeightMaxStrength[25] = 0.9;
		statEquipmentWeightMaxStrength[26] = 0.9;
		statEquipmentWeightMaxStrength[27] = 1.0;
		statEquipmentWeightMaxStrength[28] = 1.0;
		statEquipmentWeightMaxStrength[29] = 1.0;
		statEquipmentWeightMaxStrength[30] = 1.0;
		statEquipmentWeightMaxStrength[31] = 1.0;
		statEquipmentWeightMaxStrength[32] = 1.0;
		statEquipmentWeightMaxStrength[33] = 1.1;
		statEquipmentWeightMaxStrength[34] = 1.1;
		statEquipmentWeightMaxStrength[35] = 1.1;
		statEquipmentWeightMaxStrength[36] = 1.1;
		statEquipmentWeightMaxStrength[37] = 1.1;
		statEquipmentWeightMaxStrength[38] = 1.1;
		statEquipmentWeightMaxStrength[39] = 1.1;
		statEquipmentWeightMaxStrength[40] = 1.2;
		statEquipmentWeightMaxStrength[41] = 1.2;
		statEquipmentWeightMaxStrength[42] = 1.2;
		statEquipmentWeightMaxStrength[43] = 1.2;
		statEquipmentWeightMaxStrength[44] = 1.2;
		statEquipmentWeightMaxStrength[45] = 1.2;
		statEquipmentWeightMaxStrength[46] = 1.2;
		statEquipmentWeightMaxStrength[47] = 1.2;
		statEquipmentWeightMaxStrength[48] = 1.3;
		statEquipmentWeightMaxStrength[49] = 1.3;
		statEquipmentWeightMaxStrength[50] = 1.3;
		statEquipmentWeightMaxStrength[51] = 1.3;
		statEquipmentWeightMaxStrength[52] = 1.3;
		statEquipmentWeightMaxStrength[53] = 1.3;
		statEquipmentWeightMaxStrength[54] = 1.3;
		statEquipmentWeightMaxStrength[55] = 1.3;
		statEquipmentWeightMaxStrength[56] = 1.3;
		statEquipmentWeightMaxStrength[57] = 1.4;
		statEquipmentWeightMaxStrength[58] = 1.4;
		statEquipmentWeightMaxStrength[59] = 1.4;
		statEquipmentWeightMaxStrength[60] = 1.4;
		statEquipmentWeightMaxStrength[61] = 1.4;
		statEquipmentWeightMaxStrength[62] = 1.4;
		statEquipmentWeightMaxStrength[63] = 1.4;
		statEquipmentWeightMaxStrength[64] = 1.4;
		statEquipmentWeightMaxStrength[65] = 1.4;
		statEquipmentWeightMaxStrength[66] = 1.4;
		statEquipmentWeightMaxStrength[67] = 1.5;
		statEquipmentWeightMaxStrength[68] = 1.5;
		statEquipmentWeightMaxStrength[69] = 1.5;
		statEquipmentWeightMaxStrength[70] = 1.5;
		statEquipmentWeightMaxStrength[71] = 1.5;
		statEquipmentWeightMaxStrength[72] = 1.5;
		statEquipmentWeightMaxStrength[73] = 1.5;
		statEquipmentWeightMaxStrength[74] = 1.5;
		statEquipmentWeightMaxStrength[75] = 1.5;

		var statKiPulseStrength = new Array();
		statKiPulseStrength[0] = 0;
		statKiPulseStrength[1] = 0;
		statKiPulseStrength[2] = 0;
		statKiPulseStrength[3] = 0;
		statKiPulseStrength[4] = 0;
		statKiPulseStrength[5] = 0;
		statKiPulseStrength[6] = 5;
		statKiPulseStrength[7] = 10;
		statKiPulseStrength[8] = 15;
		statKiPulseStrength[9] = 20;
		statKiPulseStrength[10] = 25;
		statKiPulseStrength[11] = 29;
		statKiPulseStrength[12] = 32;
		statKiPulseStrength[13] = 36;
		statKiPulseStrength[14] = 39;
		statKiPulseStrength[15] = 43;
		statKiPulseStrength[16] = 46;
		statKiPulseStrength[17] = 49;
		statKiPulseStrength[18] = 52;
		statKiPulseStrength[19] = 55;
		statKiPulseStrength[20] = 58;
		statKiPulseStrength[21] = 60;
		statKiPulseStrength[22] = 63;
		statKiPulseStrength[23] = 65;
		statKiPulseStrength[24] = 68;
		statKiPulseStrength[25] = 70;
		statKiPulseStrength[26] = 72;
		statKiPulseStrength[27] = 74;
		statKiPulseStrength[28] = 76;
		statKiPulseStrength[29] = 78;
		statKiPulseStrength[30] = 80;
		statKiPulseStrength[31] = 81;
		statKiPulseStrength[32] = 83;
		statKiPulseStrength[33] = 84;
		statKiPulseStrength[34] = 86;
		statKiPulseStrength[35] = 87;
		statKiPulseStrength[36] = 89;
		statKiPulseStrength[37] = 90;
		statKiPulseStrength[38] = 92;
		statKiPulseStrength[39] = 93;
		statKiPulseStrength[40] = 95;
		statKiPulseStrength[41] = 96;
		statKiPulseStrength[42] = 97;
		statKiPulseStrength[43] = 98;
		statKiPulseStrength[44] = 99;
		statKiPulseStrength[45] = 100;
		statKiPulseStrength[46] = 101;
		statKiPulseStrength[47] = 102;
		statKiPulseStrength[48] = 103;
		statKiPulseStrength[49] = 104;
		statKiPulseStrength[50] = 105;
		statKiPulseStrength[51] = 105;
		statKiPulseStrength[52] = 106;
		statKiPulseStrength[53] = 106;
		statKiPulseStrength[54] = 107;
		statKiPulseStrength[55] = 107;
		statKiPulseStrength[56] = 108;
		statKiPulseStrength[57] = 108;
		statKiPulseStrength[58] = 109;
		statKiPulseStrength[59] = 109;
		statKiPulseStrength[60] = 110;
		statKiPulseStrength[61] = 110;
		statKiPulseStrength[62] = 111;
		statKiPulseStrength[63] = 111;
		statKiPulseStrength[64] = 112;
		statKiPulseStrength[65] = 112;
		statKiPulseStrength[66] = 113;
		statKiPulseStrength[67] = 113;
		statKiPulseStrength[68] = 114;
		statKiPulseStrength[69] = 114;
		statKiPulseStrength[70] = 115;
		statKiPulseStrength[71] = 115;
		statKiPulseStrength[72] = 116;
		statKiPulseStrength[73] = 116;
		statKiPulseStrength[74] = 117;
		statKiPulseStrength[75] = 117;

		var statDefenseWaterStrength = new Array();
		statDefenseWaterStrength[0] = 0.0;
		statDefenseWaterStrength[1] = 0.0;
		statDefenseWaterStrength[2] = 0.0;
		statDefenseWaterStrength[3] = 0.0;
		statDefenseWaterStrength[4] = 0.0;
		statDefenseWaterStrength[5] = 0.0;
		statDefenseWaterStrength[6] = 0.0;
		statDefenseWaterStrength[7] = 0.5;
		statDefenseWaterStrength[8] = 1.0;
		statDefenseWaterStrength[9] = 1.5;
		statDefenseWaterStrength[10] = 2.0;
		statDefenseWaterStrength[11] = 2.4;
		statDefenseWaterStrength[12] = 2.8;
		statDefenseWaterStrength[13] = 3.2;
		statDefenseWaterStrength[14] = 3.6;
		statDefenseWaterStrength[15] = 4.0;
		statDefenseWaterStrength[16] = 4.3;
		statDefenseWaterStrength[17] = 4.6;
		statDefenseWaterStrength[18] = 4.9;
		statDefenseWaterStrength[19] = 5.2;
		statDefenseWaterStrength[20] = 5.5;
		statDefenseWaterStrength[21] = 5.7;
		statDefenseWaterStrength[22] = 5.9;
		statDefenseWaterStrength[23] = 6.1;
		statDefenseWaterStrength[24] = 6.3;
		statDefenseWaterStrength[25] = 6.5;
		statDefenseWaterStrength[26] = 6.7;
		statDefenseWaterStrength[27] = 6.9;
		statDefenseWaterStrength[28] = 7.1;
		statDefenseWaterStrength[29] = 7.3;
		statDefenseWaterStrength[30] = 7.5;
		statDefenseWaterStrength[31] = 7.7;
		statDefenseWaterStrength[32] = 7.9;
		statDefenseWaterStrength[33] = 8.1;
		statDefenseWaterStrength[34] = 8.3;
		statDefenseWaterStrength[35] = 8.5;
		statDefenseWaterStrength[36] = 8.7;
		statDefenseWaterStrength[37] = 8.9;
		statDefenseWaterStrength[38] = 9.1;
		statDefenseWaterStrength[39] = 9.3;
		statDefenseWaterStrength[40] = 9.5;
		statDefenseWaterStrength[41] = 9.6;
		statDefenseWaterStrength[42] = 9.7;
		statDefenseWaterStrength[43] = 9.8;
		statDefenseWaterStrength[44] = 9.9;
		statDefenseWaterStrength[45] = 10.0;
		statDefenseWaterStrength[46] = 10.1;
		statDefenseWaterStrength[47] = 10.2;
		statDefenseWaterStrength[48] = 10.3;
		statDefenseWaterStrength[49] = 10.4;
		statDefenseWaterStrength[50] = 10.5;
		statDefenseWaterStrength[51] = 10.6;
		statDefenseWaterStrength[52] = 10.7;
		statDefenseWaterStrength[53] = 10.8;
		statDefenseWaterStrength[54] = 10.9;
		statDefenseWaterStrength[55] = 11.0;
		statDefenseWaterStrength[56] = 11.1;
		statDefenseWaterStrength[57] = 11.2;
		statDefenseWaterStrength[58] = 11.3;
		statDefenseWaterStrength[59] = 11.4;
		statDefenseWaterStrength[60] = 11.5;
		statDefenseWaterStrength[61] = 11.6;
		statDefenseWaterStrength[62] = 11.7;
		statDefenseWaterStrength[63] = 11.8;
		statDefenseWaterStrength[64] = 11.9;
		statDefenseWaterStrength[65] = 12.0;
		statDefenseWaterStrength[66] = 12.1;
		statDefenseWaterStrength[67] = 12.2;
		statDefenseWaterStrength[68] = 12.3;
		statDefenseWaterStrength[69] = 12.4;
		statDefenseWaterStrength[70] = 12.5;
		statDefenseWaterStrength[71] = 12.6;
		statDefenseWaterStrength[72] = 12.7;
		statDefenseWaterStrength[73] = 12.8;
		statDefenseWaterStrength[74] = 12.9;
		statDefenseWaterStrength[75] = 13.0;

	// Functions
		function updateStrength() {
			document.getElementById("totalStrength").textContent = baseStrength + lvlStrength;
		    document.getElementById("totalLife").textContent = baseLife + statLifeConstitution[baseConstitution + lvlConstitution] + statLifeStamina[baseStamina + lvlStamina] + (((lvlConstitution + lvlHeart + lvlCourage + lvlStamina + lvlStrength + lvlSkill + lvlDexterity + lvlMagic) - 3) * 10);
			document.getElementById("totalKiPulse").textContent = baseKiPulse + statKiPulseStrength[baseStrength + lvlStrength] + statKiPulseSkill[baseSkill + lvlSkill];
			document.getElementById("totalEquipmentWeightMax").textContent = round(baseEquipmentWeightMax + statEquipmentWeightMaxStrength[baseStrength + lvlStrength] + statEquipmentWeightMaxStamina[baseStamina + lvlStamina], 1).toFixed(1);
			document.getElementById("totalDefenseWater").textContent = round(baseDefenseWater + statDefenseWaterStrength[baseStrength + lvlStrength], 1).toFixed(1);
		    document.getElementById("totalLevel").textContent = (lvlConstitution + lvlHeart + lvlCourage + lvlStamina + lvlStrength + lvlSkill + lvlDexterity + lvlMagic) - 2;
		}

		function statStrengthUp() {
			lvlStrength += 1;
			updateBuild();
		}

		function statStrengthDown() {
			lvlStrength -= 1;
				if (lvlStrength < 0){
					lvlStrength = 0;
				}
			updateBuild();
		}

// End Strength Section



// Start Skill Section
	// Variables
		var statKiPulseSkill = new Array();
		statKiPulseSkill[0] = 0;
		statKiPulseSkill[1] = 0;
		statKiPulseSkill[2] = 0;
		statKiPulseSkill[3] = 0;
		statKiPulseSkill[4] = 0;
		statKiPulseSkill[5] = 0;
		statKiPulseSkill[6] = 10;
		statKiPulseSkill[7] = 20;
		statKiPulseSkill[8] = 30;
		statKiPulseSkill[9] = 40;
		statKiPulseSkill[10] = 50;
		statKiPulseSkill[11] = 57;
		statKiPulseSkill[12] = 64;
		statKiPulseSkill[13] = 71;
		statKiPulseSkill[14] = 78;
		statKiPulseSkill[15] = 85;
		statKiPulseSkill[16] = 91;
		statKiPulseSkill[17] = 97;
		statKiPulseSkill[18] = 103;
		statKiPulseSkill[19] = 109;
		statKiPulseSkill[20] = 115;
		statKiPulseSkill[21] = 120;
		statKiPulseSkill[22] = 125;
		statKiPulseSkill[23] = 130;
		statKiPulseSkill[24] = 135;
		statKiPulseSkill[25] = 140;
		statKiPulseSkill[26] = 144;
		statKiPulseSkill[27] = 148;
		statKiPulseSkill[28] = 152;
		statKiPulseSkill[29] = 156;
		statKiPulseSkill[30] = 160;
		statKiPulseSkill[31] = 163;
		statKiPulseSkill[32] = 166;
		statKiPulseSkill[33] = 169;
		statKiPulseSkill[34] = 172;
		statKiPulseSkill[35] = 175;
		statKiPulseSkill[36] = 178;
		statKiPulseSkill[37] = 181;
		statKiPulseSkill[38] = 184;
		statKiPulseSkill[39] = 187;
		statKiPulseSkill[40] = 190;
		statKiPulseSkill[41] = 192;
		statKiPulseSkill[42] = 194;
		statKiPulseSkill[43] = 196;
		statKiPulseSkill[44] = 198;
		statKiPulseSkill[45] = 200;
		statKiPulseSkill[46] = 202;
		statKiPulseSkill[47] = 204;
		statKiPulseSkill[48] = 206;
		statKiPulseSkill[49] = 208;
		statKiPulseSkill[50] = 210;
		statKiPulseSkill[51] = 211;
		statKiPulseSkill[52] = 212;
		statKiPulseSkill[53] = 213;
		statKiPulseSkill[54] = 214;
		statKiPulseSkill[55] = 215;
		statKiPulseSkill[56] = 216;
		statKiPulseSkill[57] = 217;
		statKiPulseSkill[58] = 218;
		statKiPulseSkill[59] = 219;
		statKiPulseSkill[60] = 220;
		statKiPulseSkill[61] = 221;
		statKiPulseSkill[62] = 222;
		statKiPulseSkill[63] = 223;
		statKiPulseSkill[64] = 224;
		statKiPulseSkill[65] = 225;
		statKiPulseSkill[66] = 226;
		statKiPulseSkill[67] = 227;
		statKiPulseSkill[68] = 228;
		statKiPulseSkill[69] = 229;
		statKiPulseSkill[70] = 230;
		statKiPulseSkill[71] = 231;
		statKiPulseSkill[72] = 232;
		statKiPulseSkill[73] = 233;
		statKiPulseSkill[74] = 234;
		statKiPulseSkill[75] = 235;

		var statNinjutsuPowerSkill = new Array();
		statNinjutsuPowerSkill[0] = 0;
		statNinjutsuPowerSkill[1] = 0;
		statNinjutsuPowerSkill[2] = 0;
		statNinjutsuPowerSkill[3] = 0;
		statNinjutsuPowerSkill[4] = 0;
		statNinjutsuPowerSkill[5] = 0;
		statNinjutsuPowerSkill[6] = 3;
		statNinjutsuPowerSkill[7] = 6;
		statNinjutsuPowerSkill[8] = 8;
		statNinjutsuPowerSkill[9] = 10;
		statNinjutsuPowerSkill[10] = 11;
		statNinjutsuPowerSkill[11] = 12;
		statNinjutsuPowerSkill[12] = 13;
		statNinjutsuPowerSkill[13] = 14;
		statNinjutsuPowerSkill[14] = 15;
		statNinjutsuPowerSkill[15] = 16;
		statNinjutsuPowerSkill[16] = 17;
		statNinjutsuPowerSkill[17] = 18;
		statNinjutsuPowerSkill[18] = 19;
		statNinjutsuPowerSkill[19] = 20;
		statNinjutsuPowerSkill[20] = 21;
		statNinjutsuPowerSkill[21] = 22;
		statNinjutsuPowerSkill[22] = 23;
		statNinjutsuPowerSkill[23] = 24;
		statNinjutsuPowerSkill[24] = 25;
		statNinjutsuPowerSkill[25] = 26;
		statNinjutsuPowerSkill[26] = 27;
		statNinjutsuPowerSkill[27] = 28;
		statNinjutsuPowerSkill[28] = 29;
		statNinjutsuPowerSkill[29] = 30;
		statNinjutsuPowerSkill[30] = 31;
		statNinjutsuPowerSkill[31] = 32;
		statNinjutsuPowerSkill[32] = 33;
		statNinjutsuPowerSkill[33] = 34;
		statNinjutsuPowerSkill[34] = 35;
		statNinjutsuPowerSkill[35] = 36;
		statNinjutsuPowerSkill[36] = 37;
		statNinjutsuPowerSkill[37] = 38;
		statNinjutsuPowerSkill[38] = 39;
		statNinjutsuPowerSkill[39] = 40;
		statNinjutsuPowerSkill[40] = 41;
		statNinjutsuPowerSkill[41] = 42;
		statNinjutsuPowerSkill[42] = 43;
		statNinjutsuPowerSkill[43] = 44;
		statNinjutsuPowerSkill[44] = 45;
		statNinjutsuPowerSkill[45] = 46;
		statNinjutsuPowerSkill[46] = 47;
		statNinjutsuPowerSkill[47] = 48;
		statNinjutsuPowerSkill[48] = 49;
		statNinjutsuPowerSkill[49] = 50;
		statNinjutsuPowerSkill[50] = 51;
		statNinjutsuPowerSkill[51] = 52;
		statNinjutsuPowerSkill[52] = 53;
		statNinjutsuPowerSkill[53] = 54;
		statNinjutsuPowerSkill[54] = 55;
		statNinjutsuPowerSkill[55] = 56;
		statNinjutsuPowerSkill[56] = 57;
		statNinjutsuPowerSkill[57] = 58;
		statNinjutsuPowerSkill[58] = 59;
		statNinjutsuPowerSkill[59] = 60;
		statNinjutsuPowerSkill[60] = 61;
		statNinjutsuPowerSkill[61] = 62;
		statNinjutsuPowerSkill[62] = 63;
		statNinjutsuPowerSkill[63] = 64;
		statNinjutsuPowerSkill[64] = 65;
		statNinjutsuPowerSkill[65] = 66;
		statNinjutsuPowerSkill[66] = 67;
		statNinjutsuPowerSkill[67] = 68;
		statNinjutsuPowerSkill[68] = 69;
		statNinjutsuPowerSkill[69] = 70;
		statNinjutsuPowerSkill[70] = 71;
		statNinjutsuPowerSkill[71] = 72;
		statNinjutsuPowerSkill[72] = 73;
		statNinjutsuPowerSkill[73] = 74;
		statNinjutsuPowerSkill[74] = 75;
		statNinjutsuPowerSkill[75] = 76;

	// Functions
		function updateSkill() {
			document.getElementById("totalSkill").textContent = baseSkill + lvlSkill;
		    document.getElementById("totalLife").textContent = baseLife + statLifeConstitution[baseConstitution + lvlConstitution] + statLifeStamina[baseStamina + lvlStamina] + (((lvlConstitution + lvlHeart + lvlCourage + lvlStamina + lvlStrength + lvlSkill + lvlDexterity + lvlMagic) - 3) * 10);
			document.getElementById("totalNinjutsuPower").textContent = baseNinjutsuPower + statNinjutsuPowerSkill[baseSkill + lvlSkill] + statNinjutsuPowerDexterity[baseDexterity + lvlDexterity];
			document.getElementById("totalKiPulse").textContent = baseKiPulse + statKiPulseSkill[baseSkill + lvlSkill] + statKiPulseStrength[baseStrength + lvlStrength];
		    document.getElementById("totalLevel").textContent = (lvlConstitution + lvlHeart + lvlCourage + lvlStamina + lvlStrength + lvlSkill + lvlDexterity + lvlMagic) - 2;
		}

		function statSkillUp() {
			lvlSkill += 1;
			updateBuild();
		}

		function statSkillDown() {
			lvlSkill -= 1;
				if (lvlSkill < 0){
					lvlSkill = 0;
				}
			updateBuild();
		}

// End Skill Section



// Start Dexterity Section
	// Variables
		var statNinjutsuPowerDexterity = new Array();
		statNinjutsuPowerDexterity[0] = 0;
		statNinjutsuPowerDexterity[1] = 0;
		statNinjutsuPowerDexterity[2] = 0;
		statNinjutsuPowerDexterity[3] = 0;
		statNinjutsuPowerDexterity[4] = 0;
		statNinjutsuPowerDexterity[5] = 0;
		statNinjutsuPowerDexterity[6] = 12;
		statNinjutsuPowerDexterity[7] = 24;
		statNinjutsuPowerDexterity[8] = 35;
		statNinjutsuPowerDexterity[9] = 46;
		statNinjutsuPowerDexterity[10] = 56;
		statNinjutsuPowerDexterity[11] = 65;
		statNinjutsuPowerDexterity[12] = 74;
		statNinjutsuPowerDexterity[13] = 83;
		statNinjutsuPowerDexterity[14] = 92;
		statNinjutsuPowerDexterity[15] = 101;
		statNinjutsuPowerDexterity[16] = 109;
		statNinjutsuPowerDexterity[17] = 117;
		statNinjutsuPowerDexterity[18] = 125;
		statNinjutsuPowerDexterity[19] = 133;
		statNinjutsuPowerDexterity[20] = 141;
		statNinjutsuPowerDexterity[21] = 149;
		statNinjutsuPowerDexterity[22] = 157;
		statNinjutsuPowerDexterity[23] = 165;
		statNinjutsuPowerDexterity[24] = 173;
		statNinjutsuPowerDexterity[25] = 181;
		statNinjutsuPowerDexterity[26] = 188;
		statNinjutsuPowerDexterity[27] = 195;
		statNinjutsuPowerDexterity[28] = 202;
		statNinjutsuPowerDexterity[29] = 209;
		statNinjutsuPowerDexterity[30] = 216;
		statNinjutsuPowerDexterity[31] = 223;
		statNinjutsuPowerDexterity[32] = 230;
		statNinjutsuPowerDexterity[33] = 237;
		statNinjutsuPowerDexterity[34] = 244;
		statNinjutsuPowerDexterity[35] = 251;
		statNinjutsuPowerDexterity[36] = 257;
		statNinjutsuPowerDexterity[37] = 263;
		statNinjutsuPowerDexterity[38] = 269;
		statNinjutsuPowerDexterity[39] = 275;
		statNinjutsuPowerDexterity[40] = 281;
		statNinjutsuPowerDexterity[41] = 287;
		statNinjutsuPowerDexterity[42] = 293;
		statNinjutsuPowerDexterity[43] = 299;
		statNinjutsuPowerDexterity[44] = 305;
		statNinjutsuPowerDexterity[45] = 311;
		statNinjutsuPowerDexterity[46] = 317;
		statNinjutsuPowerDexterity[47] = 323;
		statNinjutsuPowerDexterity[48] = 329;
		statNinjutsuPowerDexterity[49] = 335;
		statNinjutsuPowerDexterity[50] = 341;
		statNinjutsuPowerDexterity[51] = 346;
		statNinjutsuPowerDexterity[52] = 351;
		statNinjutsuPowerDexterity[53] = 356;
		statNinjutsuPowerDexterity[54] = 361;
		statNinjutsuPowerDexterity[55] = 366;
		statNinjutsuPowerDexterity[56] = 371;
		statNinjutsuPowerDexterity[57] = 376;
		statNinjutsuPowerDexterity[58] = 381;
		statNinjutsuPowerDexterity[59] = 386;
		statNinjutsuPowerDexterity[60] = 391;
		statNinjutsuPowerDexterity[61] = 395;
		statNinjutsuPowerDexterity[62] = 399;
		statNinjutsuPowerDexterity[63] = 403;
		statNinjutsuPowerDexterity[64] = 407;
		statNinjutsuPowerDexterity[65] = 411;
		statNinjutsuPowerDexterity[66] = 415;
		statNinjutsuPowerDexterity[67] = 419;
		statNinjutsuPowerDexterity[68] = 423;
		statNinjutsuPowerDexterity[69] = 427;
		statNinjutsuPowerDexterity[70] = 431;
		statNinjutsuPowerDexterity[71] = 434;
		statNinjutsuPowerDexterity[72] = 437;
		statNinjutsuPowerDexterity[73] = 440;
		statNinjutsuPowerDexterity[74] = 443;
		statNinjutsuPowerDexterity[75] = 446;

		var statNinjutsuCapacityDexterity = new Array();
		statNinjutsuCapacityDexterity[0] = 0;
		statNinjutsuCapacityDexterity[1] = 0;
		statNinjutsuCapacityDexterity[2] = 0;
		statNinjutsuCapacityDexterity[3] = 0;
		statNinjutsuCapacityDexterity[4] = 0;
		statNinjutsuCapacityDexterity[5] = 0;
		statNinjutsuCapacityDexterity[6] = 2;
		statNinjutsuCapacityDexterity[7] = 3;
		statNinjutsuCapacityDexterity[8] = 4;
		statNinjutsuCapacityDexterity[9] = 5;
		statNinjutsuCapacityDexterity[10] = 7;
		statNinjutsuCapacityDexterity[11] = 8;
		statNinjutsuCapacityDexterity[12] = 9;
		statNinjutsuCapacityDexterity[13] = 10;
		statNinjutsuCapacityDexterity[14] = 11;
		statNinjutsuCapacityDexterity[15] = 12;
		statNinjutsuCapacityDexterity[16] = 13;
		statNinjutsuCapacityDexterity[17] = 14;
		statNinjutsuCapacityDexterity[18] = 15;
		statNinjutsuCapacityDexterity[19] = 16;
		statNinjutsuCapacityDexterity[20] = 17;
		statNinjutsuCapacityDexterity[21] = 18;
		statNinjutsuCapacityDexterity[22] = 19;
		statNinjutsuCapacityDexterity[23] = 20;
		statNinjutsuCapacityDexterity[24] = 21;
		statNinjutsuCapacityDexterity[25] = 22;
		statNinjutsuCapacityDexterity[26] = 23;
		statNinjutsuCapacityDexterity[27] = 24;
		statNinjutsuCapacityDexterity[28] = 25;
		statNinjutsuCapacityDexterity[29] = 26;
		statNinjutsuCapacityDexterity[30] = 27;
		statNinjutsuCapacityDexterity[31] = 27;
		statNinjutsuCapacityDexterity[32] = 27;
		statNinjutsuCapacityDexterity[33] = 27;
		statNinjutsuCapacityDexterity[34] = 27;
		statNinjutsuCapacityDexterity[35] = 27;
		statNinjutsuCapacityDexterity[36] = 27;
		statNinjutsuCapacityDexterity[37] = 27;
		statNinjutsuCapacityDexterity[38] = 27;
		statNinjutsuCapacityDexterity[39] = 27;
		statNinjutsuCapacityDexterity[40] = 27;
		statNinjutsuCapacityDexterity[41] = 27;
		statNinjutsuCapacityDexterity[42] = 27;
		statNinjutsuCapacityDexterity[43] = 27;
		statNinjutsuCapacityDexterity[44] = 27;
		statNinjutsuCapacityDexterity[45] = 27;
		statNinjutsuCapacityDexterity[46] = 27;
		statNinjutsuCapacityDexterity[47] = 27;
		statNinjutsuCapacityDexterity[48] = 27;
		statNinjutsuCapacityDexterity[49] = 27;
		statNinjutsuCapacityDexterity[50] = 27;
		statNinjutsuCapacityDexterity[51] = 27;
		statNinjutsuCapacityDexterity[52] = 27;
		statNinjutsuCapacityDexterity[53] = 27;
		statNinjutsuCapacityDexterity[54] = 27;
		statNinjutsuCapacityDexterity[55] = 27;
		statNinjutsuCapacityDexterity[56] = 27;
		statNinjutsuCapacityDexterity[57] = 27;
		statNinjutsuCapacityDexterity[58] = 27;
		statNinjutsuCapacityDexterity[59] = 27;
		statNinjutsuCapacityDexterity[60] = 27;
		statNinjutsuCapacityDexterity[61] = 27;
		statNinjutsuCapacityDexterity[62] = 27;
		statNinjutsuCapacityDexterity[63] = 27;
		statNinjutsuCapacityDexterity[64] = 27;
		statNinjutsuCapacityDexterity[65] = 27;
		statNinjutsuCapacityDexterity[66] = 27;
		statNinjutsuCapacityDexterity[67] = 27;
		statNinjutsuCapacityDexterity[68] = 27;
		statNinjutsuCapacityDexterity[69] = 27;
		statNinjutsuCapacityDexterity[70] = 27;
		statNinjutsuCapacityDexterity[71] = 27;
		statNinjutsuCapacityDexterity[72] = 27;
		statNinjutsuCapacityDexterity[73] = 27;
		statNinjutsuCapacityDexterity[74] = 27;
		statNinjutsuCapacityDexterity[75] = 27;
		statNinjutsuCapacityDexterity[76] = 27;
		statNinjutsuCapacityDexterity[77] = 27;
		statNinjutsuCapacityDexterity[78] = 27;
		statNinjutsuCapacityDexterity[79] = 27;
		statNinjutsuCapacityDexterity[80] = 27;
		statNinjutsuCapacityDexterity[81] = 27;
		statNinjutsuCapacityDexterity[82] = 27;
		statNinjutsuCapacityDexterity[83] = 27;
		statNinjutsuCapacityDexterity[84] = 27;
		statNinjutsuCapacityDexterity[85] = 27;
		statNinjutsuCapacityDexterity[86] = 27;
		statNinjutsuCapacityDexterity[87] = 27;
		statNinjutsuCapacityDexterity[88] = 27;
		statNinjutsuCapacityDexterity[89] = 27;
		statNinjutsuCapacityDexterity[90] = 27;
		statNinjutsuCapacityDexterity[91] = 27;
		statNinjutsuCapacityDexterity[92] = 27;
		statNinjutsuCapacityDexterity[93] = 27;
		statNinjutsuCapacityDexterity[94] = 27;
		statNinjutsuCapacityDexterity[95] = 27;
		statNinjutsuCapacityDexterity[96] = 27;
		statNinjutsuCapacityDexterity[97] = 27;
		statNinjutsuCapacityDexterity[98] = 27;
		statNinjutsuCapacityDexterity[99] = 27;

		var statDefensePoisonDexterity = new Array();
		statDefensePoisonDexterity[0] = 0.0;
		statDefensePoisonDexterity[1] = 0.0;
		statDefensePoisonDexterity[2] = 0.0;
		statDefensePoisonDexterity[3] = 0.0;
		statDefensePoisonDexterity[4] = 0.0;
		statDefensePoisonDexterity[5] = 0.0;
		statDefensePoisonDexterity[6] = 0.5;
		statDefensePoisonDexterity[7] = 1.0;
		statDefensePoisonDexterity[8] = 1.5;
		statDefensePoisonDexterity[9] = 2.0;
		statDefensePoisonDexterity[10] = 2.4;
		statDefensePoisonDexterity[11] = 2.8;
		statDefensePoisonDexterity[12] = 3.2;
		statDefensePoisonDexterity[13] = 3.6;
		statDefensePoisonDexterity[14] = 4.0;
		statDefensePoisonDexterity[15] = 4.3;
		statDefensePoisonDexterity[16] = 4.6;
		statDefensePoisonDexterity[17] = 4.9;
		statDefensePoisonDexterity[18] = 5.2;
		statDefensePoisonDexterity[19] = 5.5;
		statDefensePoisonDexterity[20] = 5.7;
		statDefensePoisonDexterity[21] = 5.9;
		statDefensePoisonDexterity[22] = 6.1;
		statDefensePoisonDexterity[23] = 6.3;
		statDefensePoisonDexterity[24] = 6.5;
		statDefensePoisonDexterity[25] = 6.7;
		statDefensePoisonDexterity[26] = 6.9;
		statDefensePoisonDexterity[27] = 7.1;
		statDefensePoisonDexterity[28] = 7.3;
		statDefensePoisonDexterity[29] = 7.5;
		statDefensePoisonDexterity[30] = 7.7;
		statDefensePoisonDexterity[31] = 7.9;
		statDefensePoisonDexterity[32] = 8.1;
		statDefensePoisonDexterity[33] = 8.3;
		statDefensePoisonDexterity[34] = 8.5;
		statDefensePoisonDexterity[35] = 8.7;
		statDefensePoisonDexterity[36] = 8.9;
		statDefensePoisonDexterity[37] = 9.1;
		statDefensePoisonDexterity[38] = 9.3;
		statDefensePoisonDexterity[39] = 9.5;
		statDefensePoisonDexterity[40] = 9.6;
		statDefensePoisonDexterity[41] = 9.7;
		statDefensePoisonDexterity[42] = 9.8;
		statDefensePoisonDexterity[43] = 9.9;
		statDefensePoisonDexterity[44] = 10.0;
		statDefensePoisonDexterity[45] = 10.1;
		statDefensePoisonDexterity[46] = 10.2;
		statDefensePoisonDexterity[47] = 10.3;
		statDefensePoisonDexterity[48] = 10.4;
		statDefensePoisonDexterity[49] = 10.5;
		statDefensePoisonDexterity[50] = 10.6;
		statDefensePoisonDexterity[51] = 10.7;
		statDefensePoisonDexterity[52] = 10.8;
		statDefensePoisonDexterity[53] = 10.9;
		statDefensePoisonDexterity[54] = 11.0;
		statDefensePoisonDexterity[55] = 11.1;
		statDefensePoisonDexterity[56] = 11.2;
		statDefensePoisonDexterity[57] = 11.3;
		statDefensePoisonDexterity[58] = 11.4;
		statDefensePoisonDexterity[59] = 11.5;
		statDefensePoisonDexterity[60] = 11.6;
		statDefensePoisonDexterity[61] = 11.7;
		statDefensePoisonDexterity[62] = 11.8;
		statDefensePoisonDexterity[63] = 11.9;
		statDefensePoisonDexterity[64] = 12.0;
		statDefensePoisonDexterity[65] = 12.1;
		statDefensePoisonDexterity[66] = 12.2;
		statDefensePoisonDexterity[67] = 12.3;
		statDefensePoisonDexterity[68] = 12.4;
		statDefensePoisonDexterity[69] = 12.5;
		statDefensePoisonDexterity[70] = 12.6;
		statDefensePoisonDexterity[71] = 12.7;
		statDefensePoisonDexterity[72] = 12.8;
		statDefensePoisonDexterity[73] = 12.9;
		statDefensePoisonDexterity[74] = 13.0;
		statDefensePoisonDexterity[75] = 13.1;

		var statDefenseParalysisDexterity = new Array();
		statDefenseParalysisDexterity[0] = 0.0;
		statDefenseParalysisDexterity[1] = 0.0;
		statDefenseParalysisDexterity[2] = 0.0;
		statDefenseParalysisDexterity[3] = 0.0;
		statDefenseParalysisDexterity[4] = 0.0;
		statDefenseParalysisDexterity[5] = 0.0;
		statDefenseParalysisDexterity[6] = 0.5;
		statDefenseParalysisDexterity[7] = 1.0;
		statDefenseParalysisDexterity[8] = 1.5;
		statDefenseParalysisDexterity[9] = 2.0;
		statDefenseParalysisDexterity[10] = 2.4;
		statDefenseParalysisDexterity[11] = 2.8;
		statDefenseParalysisDexterity[12] = 3.2;
		statDefenseParalysisDexterity[13] = 3.6;
		statDefenseParalysisDexterity[14] = 4.0;
		statDefenseParalysisDexterity[15] = 4.3;
		statDefenseParalysisDexterity[16] = 4.6;
		statDefenseParalysisDexterity[17] = 4.9;
		statDefenseParalysisDexterity[18] = 5.2;
		statDefenseParalysisDexterity[19] = 5.5;
		statDefenseParalysisDexterity[20] = 5.7;
		statDefenseParalysisDexterity[21] = 5.9;
		statDefenseParalysisDexterity[22] = 6.1;
		statDefenseParalysisDexterity[23] = 6.3;
		statDefenseParalysisDexterity[24] = 6.5;
		statDefenseParalysisDexterity[25] = 6.7;
		statDefenseParalysisDexterity[26] = 6.9;
		statDefenseParalysisDexterity[27] = 7.1;
		statDefenseParalysisDexterity[28] = 7.3;
		statDefenseParalysisDexterity[29] = 7.5;
		statDefenseParalysisDexterity[30] = 7.7;
		statDefenseParalysisDexterity[31] = 7.9;
		statDefenseParalysisDexterity[32] = 8.1;
		statDefenseParalysisDexterity[33] = 8.3;
		statDefenseParalysisDexterity[34] = 8.5;
		statDefenseParalysisDexterity[35] = 8.7;
		statDefenseParalysisDexterity[36] = 8.9;
		statDefenseParalysisDexterity[37] = 9.1;
		statDefenseParalysisDexterity[38] = 9.3;
		statDefenseParalysisDexterity[39] = 9.5;
		statDefenseParalysisDexterity[40] = 9.6;
		statDefenseParalysisDexterity[41] = 9.7;
		statDefenseParalysisDexterity[42] = 9.8;
		statDefenseParalysisDexterity[43] = 9.9;
		statDefenseParalysisDexterity[44] = 10.0;
		statDefenseParalysisDexterity[45] = 10.1;
		statDefenseParalysisDexterity[46] = 10.2;
		statDefenseParalysisDexterity[47] = 10.3;
		statDefenseParalysisDexterity[48] = 10.4;
		statDefenseParalysisDexterity[49] = 10.5;
		statDefenseParalysisDexterity[50] = 10.6;
		statDefenseParalysisDexterity[51] = 10.7;
		statDefenseParalysisDexterity[52] = 10.8;
		statDefenseParalysisDexterity[53] = 10.9;
		statDefenseParalysisDexterity[54] = 11.0;
		statDefenseParalysisDexterity[55] = 11.1;
		statDefenseParalysisDexterity[56] = 11.2;
		statDefenseParalysisDexterity[57] = 11.3;
		statDefenseParalysisDexterity[58] = 11.4;
		statDefenseParalysisDexterity[59] = 11.5;
		statDefenseParalysisDexterity[60] = 11.6;
		statDefenseParalysisDexterity[61] = 11.7;
		statDefenseParalysisDexterity[62] = 11.8;
		statDefenseParalysisDexterity[63] = 11.9;
		statDefenseParalysisDexterity[64] = 12.0;
		statDefenseParalysisDexterity[65] = 12.1;
		statDefenseParalysisDexterity[66] = 12.2;
		statDefenseParalysisDexterity[67] = 12.3;
		statDefenseParalysisDexterity[68] = 12.4;
		statDefenseParalysisDexterity[69] = 12.5;
		statDefenseParalysisDexterity[70] = 12.6;
		statDefenseParalysisDexterity[71] = 12.7;
		statDefenseParalysisDexterity[72] = 12.8;
		statDefenseParalysisDexterity[73] = 12.9;
		statDefenseParalysisDexterity[74] = 13.0;
		statDefenseParalysisDexterity[75] = 13.1;

	// Functions
		function updateDexterity() {
			document.getElementById("totalDexterity").textContent = baseDexterity + lvlDexterity;
		    document.getElementById("totalLife").textContent = baseLife + statLifeConstitution[baseConstitution + lvlConstitution] + statLifeStamina[baseStamina + lvlStamina] + (((lvlConstitution + lvlHeart + lvlCourage + lvlStamina + lvlStrength + lvlSkill + lvlDexterity + lvlMagic) - 3) * 10);
		    document.getElementById("totalNinjutsuPower").textContent = baseNinjutsuPower + statNinjutsuPowerDexterity[baseDexterity + lvlDexterity] + statNinjutsuPowerSkill[baseSkill + lvlSkill];
		    document.getElementById("totalNinjutsuCapacity").textContent = baseNinjutsuCapacity + statNinjutsuCapacityDexterity[baseDexterity + lvlDexterity];
			document.getElementById("totalDefensePoison").textContent = round(baseDefensePoison + statDefensePoisonConstitution[baseConstitution + lvlConstitution] + statDefensePoisonDexterity[baseDexterity + lvlDexterity], 1).toFixed(1);
			document.getElementById("totalDefenseParalysis").textContent = round(baseDefenseParalysis + statDefenseParalysisConstitution[baseConstitution + lvlConstitution] + statDefenseParalysisDexterity[baseDexterity + lvlDexterity], 1).toFixed(1);
		    document.getElementById("totalLevel").textContent = (lvlConstitution + lvlHeart + lvlCourage + lvlStamina + lvlStrength + lvlSkill + lvlDexterity + lvlMagic) - 2;
		}

		function statDexterityUp() {
			lvlDexterity +=1;
			updateBuild();
		}

		function statDexterityDown() {
			lvlDexterity -=1;
				if (lvlDexterity < 0){
					lvlDexterity = 0;
				}
			updateBuild();
		}

// End Dexterity Section



// Start Magic Section
	// Variables
		var statOnmyoMagicPowerMagic = new Array();
		statOnmyoMagicPowerMagic[0] = 0;
		statOnmyoMagicPowerMagic[1] = 0;
		statOnmyoMagicPowerMagic[2] = 0;
		statOnmyoMagicPowerMagic[3] = 0;
		statOnmyoMagicPowerMagic[4] = 0;
		statOnmyoMagicPowerMagic[5] = 0;
		statOnmyoMagicPowerMagic[6] = 12;
		statOnmyoMagicPowerMagic[7] = 24;
		statOnmyoMagicPowerMagic[8] = 35;
		statOnmyoMagicPowerMagic[9] = 46;
		statOnmyoMagicPowerMagic[10] = 56;
		statOnmyoMagicPowerMagic[11] = 65;
		statOnmyoMagicPowerMagic[12] = 74;
		statOnmyoMagicPowerMagic[13] = 83;
		statOnmyoMagicPowerMagic[14] = 92;
		statOnmyoMagicPowerMagic[15] = 101;
		statOnmyoMagicPowerMagic[16] = 109;
		statOnmyoMagicPowerMagic[17] = 117;
		statOnmyoMagicPowerMagic[18] = 125;
		statOnmyoMagicPowerMagic[19] = 133;
		statOnmyoMagicPowerMagic[20] = 141;
		statOnmyoMagicPowerMagic[21] = 149;
		statOnmyoMagicPowerMagic[22] = 157;
		statOnmyoMagicPowerMagic[23] = 165;
		statOnmyoMagicPowerMagic[24] = 173;
		statOnmyoMagicPowerMagic[25] = 181;
		statOnmyoMagicPowerMagic[26] = 188;
		statOnmyoMagicPowerMagic[27] = 195;
		statOnmyoMagicPowerMagic[28] = 202;
		statOnmyoMagicPowerMagic[29] = 209;
		statOnmyoMagicPowerMagic[30] = 216;
		statOnmyoMagicPowerMagic[31] = 223;
		statOnmyoMagicPowerMagic[32] = 230;
		statOnmyoMagicPowerMagic[33] = 237;
		statOnmyoMagicPowerMagic[34] = 244;
		statOnmyoMagicPowerMagic[35] = 251;
		statOnmyoMagicPowerMagic[36] = 257;
		statOnmyoMagicPowerMagic[37] = 263;
		statOnmyoMagicPowerMagic[38] = 269;
		statOnmyoMagicPowerMagic[39] = 275;
		statOnmyoMagicPowerMagic[40] = 281;
		statOnmyoMagicPowerMagic[41] = 287;
		statOnmyoMagicPowerMagic[42] = 293;
		statOnmyoMagicPowerMagic[43] = 299;
		statOnmyoMagicPowerMagic[44] = 305;
		statOnmyoMagicPowerMagic[45] = 311;
		statOnmyoMagicPowerMagic[46] = 317;
		statOnmyoMagicPowerMagic[47] = 323;
		statOnmyoMagicPowerMagic[48] = 329;
		statOnmyoMagicPowerMagic[49] = 335;
		statOnmyoMagicPowerMagic[50] = 341;
		statOnmyoMagicPowerMagic[51] = 346;
		statOnmyoMagicPowerMagic[52] = 351;
		statOnmyoMagicPowerMagic[53] = 356;
		statOnmyoMagicPowerMagic[54] = 361;
		statOnmyoMagicPowerMagic[55] = 366;
		statOnmyoMagicPowerMagic[56] = 371;
		statOnmyoMagicPowerMagic[57] = 376;
		statOnmyoMagicPowerMagic[58] = 381;
		statOnmyoMagicPowerMagic[59] = 386;
		statOnmyoMagicPowerMagic[60] = 391;
		statOnmyoMagicPowerMagic[61] = 395;
		statOnmyoMagicPowerMagic[62] = 399;
		statOnmyoMagicPowerMagic[63] = 403;
		statOnmyoMagicPowerMagic[64] = 407;
		statOnmyoMagicPowerMagic[65] = 411;
		statOnmyoMagicPowerMagic[66] = 415;
		statOnmyoMagicPowerMagic[67] = 419;
		statOnmyoMagicPowerMagic[68] = 423;
		statOnmyoMagicPowerMagic[69] = 427;
		statOnmyoMagicPowerMagic[70] = 431;
		statOnmyoMagicPowerMagic[71] = 434;
		statOnmyoMagicPowerMagic[72] = 437;
		statOnmyoMagicPowerMagic[73] = 440;
		statOnmyoMagicPowerMagic[74] = 443;
		statOnmyoMagicPowerMagic[75] = 446;

		var statOnmyoMagicCapacityMagic = new Array();
		statOnmyoMagicCapacityMagic[0] = 0;
		statOnmyoMagicCapacityMagic[1] = 0;
		statOnmyoMagicCapacityMagic[2] = 0;
		statOnmyoMagicCapacityMagic[3] = 0;
		statOnmyoMagicCapacityMagic[4] = 0;
		statOnmyoMagicCapacityMagic[5] = 0;
		statOnmyoMagicCapacityMagic[6] = 2;
		statOnmyoMagicCapacityMagic[7] = 3;
		statOnmyoMagicCapacityMagic[8] = 4;
		statOnmyoMagicCapacityMagic[9] = 5;
		statOnmyoMagicCapacityMagic[10] = 7;
		statOnmyoMagicCapacityMagic[11] = 8;
		statOnmyoMagicCapacityMagic[12] = 9;
		statOnmyoMagicCapacityMagic[13] = 10;
		statOnmyoMagicCapacityMagic[14] = 11;
		statOnmyoMagicCapacityMagic[15] = 12;
		statOnmyoMagicCapacityMagic[16] = 13;
		statOnmyoMagicCapacityMagic[17] = 14;
		statOnmyoMagicCapacityMagic[18] = 15;
		statOnmyoMagicCapacityMagic[19] = 16;
		statOnmyoMagicCapacityMagic[20] = 17;
		statOnmyoMagicCapacityMagic[21] = 18;
		statOnmyoMagicCapacityMagic[22] = 19;
		statOnmyoMagicCapacityMagic[23] = 20;
		statOnmyoMagicCapacityMagic[24] = 21;
		statOnmyoMagicCapacityMagic[25] = 22;
		statOnmyoMagicCapacityMagic[26] = 23;
		statOnmyoMagicCapacityMagic[27] = 24;
		statOnmyoMagicCapacityMagic[28] = 25;
		statOnmyoMagicCapacityMagic[29] = 26;
		statOnmyoMagicCapacityMagic[30] = 27;
		statOnmyoMagicCapacityMagic[31] = 27;
		statOnmyoMagicCapacityMagic[32] = 27;
		statOnmyoMagicCapacityMagic[33] = 27;
		statOnmyoMagicCapacityMagic[34] = 27;
		statOnmyoMagicCapacityMagic[35] = 27;
		statOnmyoMagicCapacityMagic[36] = 27;
		statOnmyoMagicCapacityMagic[37] = 27;
		statOnmyoMagicCapacityMagic[38] = 27;
		statOnmyoMagicCapacityMagic[39] = 27;
		statOnmyoMagicCapacityMagic[40] = 27;
		statOnmyoMagicCapacityMagic[41] = 27;
		statOnmyoMagicCapacityMagic[42] = 27;
		statOnmyoMagicCapacityMagic[43] = 27;
		statOnmyoMagicCapacityMagic[44] = 27;
		statOnmyoMagicCapacityMagic[45] = 27;
		statOnmyoMagicCapacityMagic[46] = 27;
		statOnmyoMagicCapacityMagic[47] = 27;
		statOnmyoMagicCapacityMagic[48] = 27;
		statOnmyoMagicCapacityMagic[49] = 27;
		statOnmyoMagicCapacityMagic[50] = 27;
		statOnmyoMagicCapacityMagic[51] = 27;
		statOnmyoMagicCapacityMagic[52] = 27;
		statOnmyoMagicCapacityMagic[53] = 27;
		statOnmyoMagicCapacityMagic[54] = 27;
		statOnmyoMagicCapacityMagic[55] = 27;
		statOnmyoMagicCapacityMagic[56] = 27;
		statOnmyoMagicCapacityMagic[57] = 27;
		statOnmyoMagicCapacityMagic[58] = 27;
		statOnmyoMagicCapacityMagic[59] = 27;
		statOnmyoMagicCapacityMagic[60] = 27;
		statOnmyoMagicCapacityMagic[61] = 27;
		statOnmyoMagicCapacityMagic[62] = 27;
		statOnmyoMagicCapacityMagic[63] = 27;
		statOnmyoMagicCapacityMagic[64] = 27;
		statOnmyoMagicCapacityMagic[65] = 27;
		statOnmyoMagicCapacityMagic[66] = 27;
		statOnmyoMagicCapacityMagic[67] = 27;
		statOnmyoMagicCapacityMagic[68] = 27;
		statOnmyoMagicCapacityMagic[69] = 27;
		statOnmyoMagicCapacityMagic[70] = 27;
		statOnmyoMagicCapacityMagic[71] = 27;
		statOnmyoMagicCapacityMagic[72] = 27;
		statOnmyoMagicCapacityMagic[73] = 27;
		statOnmyoMagicCapacityMagic[74] = 27;
		statOnmyoMagicCapacityMagic[75] = 27;
		statOnmyoMagicCapacityMagic[76] = 27;
		statOnmyoMagicCapacityMagic[77] = 27;
		statOnmyoMagicCapacityMagic[78] = 27;
		statOnmyoMagicCapacityMagic[79] = 27;
		statOnmyoMagicCapacityMagic[80] = 27;
		statOnmyoMagicCapacityMagic[81] = 27;
		statOnmyoMagicCapacityMagic[82] = 27;
		statOnmyoMagicCapacityMagic[83] = 27;
		statOnmyoMagicCapacityMagic[84] = 27;
		statOnmyoMagicCapacityMagic[85] = 27;
		statOnmyoMagicCapacityMagic[86] = 27;
		statOnmyoMagicCapacityMagic[87] = 27;
		statOnmyoMagicCapacityMagic[88] = 27;
		statOnmyoMagicCapacityMagic[89] = 27;
		statOnmyoMagicCapacityMagic[90] = 27;
		statOnmyoMagicCapacityMagic[91] = 27;
		statOnmyoMagicCapacityMagic[92] = 27;
		statOnmyoMagicCapacityMagic[93] = 27;
		statOnmyoMagicCapacityMagic[94] = 27;
		statOnmyoMagicCapacityMagic[95] = 27;
		statOnmyoMagicCapacityMagic[96] = 27;
		statOnmyoMagicCapacityMagic[97] = 27;
		statOnmyoMagicCapacityMagic[98] = 27;
		statOnmyoMagicCapacityMagic[99] = 27;

	// Functions
		function updateMagic() {
			document.getElementById("totalMagic").textContent = baseMagic + lvlMagic;
		    document.getElementById("totalLife").textContent = baseLife + statLifeConstitution[baseConstitution + lvlConstitution] + statLifeStamina[baseStamina + lvlStamina] + (((lvlConstitution + lvlHeart + lvlCourage + lvlStamina + lvlStrength + lvlSkill + lvlDexterity + lvlMagic) - 3) * 10);
		    document.getElementById("totalOnmyoMagicPower").textContent = baseOnmyoMagicPower + statOnmyoMagicPowerMagic[baseMagic + lvlMagic] + statOnmyoMagicPowerCourage[baseCourage + lvlCourage];
		    document.getElementById("totalOnmyoMagicCapacity").textContent = baseOnmyoMagicCapacity + statOnmyoMagicCapacityMagic[baseMagic + lvlMagic];
		    document.getElementById("totalLevel").textContent = (lvlConstitution + lvlHeart + lvlCourage + lvlStamina + lvlStrength + lvlSkill + lvlDexterity + lvlMagic) - 2;
		}

		function statMagicUp() {
			lvlMagic +=1;
			updateBuild();
		}

		function statMagicDown() {
			lvlMagic -=1;
				if (lvlMagic < 0){
					lvlMagic = 0;
				}
			updateBuild();
		}

// End Magic Section



// Misc
