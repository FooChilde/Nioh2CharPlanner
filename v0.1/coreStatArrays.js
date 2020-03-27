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
		if ((870 + statLifeConstitution[baseConstitution + lvlConstitution] + ((((baseConstitution + baseHeart + baseCourage + baseStamina + baseStrength + baseSkill + baseDexterity + baseMagic) + (lvlConstitution + lvlHeart + lvlCourage + lvlStamina + lvlStrength + lvlSkill + lvlDexterity + lvlMagic)) - 42) * 10)) < 880) {
			document.getElementById("totalLife").textContent = 880
		}	else {
				document.getElementById("totalLife").textContent = 870 + statLifeConstitution[baseConstitution + lvlConstitution] + ((((baseConstitution + baseHeart + baseCourage + baseStamina + baseStrength + baseSkill + baseDexterity + baseMagic) + (lvlConstitution + lvlHeart + lvlCourage + lvlStamina + lvlStrength + lvlSkill + lvlDexterity + lvlMagic)) - 42) * 10);
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
		statEquipmentWeightMaxStrength[0] = 0;
		statEquipmentWeightMaxStrength[1] = 0;
		statEquipmentWeightMaxStrength[2] = 0;
		statEquipmentWeightMaxStrength[3] = 0;
		statEquipmentWeightMaxStrength[4] = 0;
		statEquipmentWeightMaxStrength[5] = 0;
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
