Bahmni.ConceptSet.FormConditions.rules = {
    'Diastolic Data' : function (formName, formFieldValues) {
        var systolic = formFieldValues['Systolic'];
        var diastolic = formFieldValues['Diastolic'];
        if (systolic || diastolic) {

            return {
                enable: ["Posture"]
            }
        } else {
            return {
                disable: ["Posture"]
            }
        }
    },
    'Systolic Data' : function (formName, formFieldValues) {
        var systolic = formFieldValues['Systolic'];
        var diastolic = formFieldValues['Diastolic'];
        if (systolic || diastolic) {

            return {
                enable: ["Posture"]
            }
        } else {
            return {
                disable: ["Posture"]
            }
        }
    },
    'DM Follow, ADRs' : function (formName, formFieldValues) {
        var result = formFieldValues['DM Follow, ADRs'];
        if (result == "SAE") {
            return {
                enable: ["DM Follow, SAE description"]
            }
        } 
        else if (result == "Other") {
            return {
                enable: ["DM Follow, Other description"]
            }
        } else {
            return {
                disable: ["DM Follow, Other description", "DM Follow, SAE description"]
            }
        }
    },
    'HTN Follow, ADRs' : function (formName, formFieldValues) {
        var result = formFieldValues['HTN Follow, ADRs'];
        if (result == "SAE") {
            return {
                enable: ["HTN Follow, SAE description"]
            }
        } 
        else if (result == "Other") {
            return {
                enable: ["HTN Follow, Other description"]
            }
        } else {
            return {
                disable: ["HTN Follow, Other description", "HTN Follow, SAE description"]
            }
        }
    },
    'Stroke Follow, ADRs' : function (formName, formFieldValues) {
        var result = formFieldValues['Stroke Follow, ADRs'];
        if (result == "SAE") {
            return {
                enable: ["Stroke Follow, SAE description"]
            }
        } 
        else if (result == "Other") {
            return {
                enable: ["Stroke Follow, Other description"]
            }
        } else {
            return {
                disable: ["Stroke Follow, Other description", "Stroke Follow, SAE description"]
            }
        }
    }
};