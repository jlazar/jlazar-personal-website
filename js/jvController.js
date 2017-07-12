
'use strict';

function paint(chartDiv, type, data) {
    let chart;
    //create jv chart object
    chart = new jvCharts({
        type: type,
        chartDiv: chartDiv,
        tipConfig: {
            type: 'simple'
        },
        options: data.options,
        setData: {
            data: data.data,
            dataTable: data.dataTableAlign,
            dataTableKeys: data.dataTableKeys,
            colors: data.color
        }
    });
    chart.draw.showToolTip = false;
}

const COLOR = ['#0c4ba2', '#15b994', '#F41C3E', '#e8c316', '#8d2ad9', '#ee8620', '#08254d', '#0d6954', '#730911', '#a78c0e', '#3f0d66', '#984f08'];

const DATA = {
    'data': [
        {"Skill":"Angular","Proficiency": 10},
        {"Skill":"React","Proficiency": 8},
        {"Skill":"Ruby on Rails","Proficiency": 8},
        {"Skill":"D3","Proficiency": 9},
        {"Skill":"WebGL","Proficiency": 6},

        // {"Skill":"Node","Proficiency": 7},
        // {"Skill":"Java","Proficiency": 6},
        // {"Skill":"Python","Proficiency": 5},
        // {"Skill":"COBOL","Proficiency": 4},

        // {"Skill":"Express","Proficiency": 7},
        // {"Skill":"Apache","Proficiency": 8}
        ],
    'dataTableAlign': {
        "label":"Skill",
        "value 1":"Proficiency"
    },
    'dataTableKeys': [
        {"vizType":"label","type":"STRING", "varKey": "Skill"},
        {"vizType":"value 1","type":"NUMBER", "varKey": "Proficiency"}
    ],
    'color': COLOR
};

var editOptions = {
    'bar-col-Angular-index-Proficiency': {
        'editable-bar': '#0c4ba2'
    },
    'bar-col-React-index-Proficiency': {
        'editable-bar': '#15b994'
    },
    'bar-col-Ruby_on_Rails-index-Proficiency': {
        'editable-bar': '#F41C3E'
    },
    'bar-col-D3-index-Proficiency': {
        'editable-bar': '#e8c316'
    },
    'bar-col-WebGL-index-Proficiency': {
        'editable-bar': '#8d2ad9'
    }

};


const DATA2 = {
    'data': [
        
        {"Skill":"Node","Proficiency": 8},
        {"Skill":"Python","Proficiency": 5},
        {"Skill":"Java","Proficiency": 6},
        {"Skill":"COBOL","Proficiency": 4},
        {"Skill":"Git","Proficiency": 8},
        {"Skill":"SVN","Proficiency": 9},
        {"Skill":"Express","Proficiency": 7},
        {"Skill":"Apache","Proficiency": 8}
        ],
    'dataTableAlign': {
        "label":"Skill",
        "value 1":"Proficiency"
    },
    'options': {
        'lineCurveType': 'Cardinal'
    },
    'dataTableKeys': [
        {"vizType":"label","type":"STRING", "varKey": "Skill"},
        {"vizType":"value 1","type":"NUMBER", "varKey": "Proficiency"}
    ],
    'color': COLOR

};

let chartDiv = d3.select('#chart-viz');
let chartDiv2 = d3.select('#chart-viz2');

paintAll();

function paintAll() {
    paint(chartDiv, 'bar', DATA);
    paint(chartDiv2, 'line', DATA2);
    var editMode = new jvEdit({chartDiv: chartDiv, vizOptions: editOptions});
    editMode.applyAllEdits();
}

window.addEventListener('resize', ()=> {
    paintAll();
});