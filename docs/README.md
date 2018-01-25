# Milestones
Milestones is a jQuery plugin that displays a timeline with milestones. The milestones are evenly separated along the timeline with labels underneath. Once a milestone is met, you can check it off and move to the next one. 

![Screenshot](images/screenshot.jpg)

## Online Demo

+ <a href="https://stemo40.github.io/milestones/" target="_blank">Demo</a>

## Requirements
Milestones is dependant on three external libraries which are listed below:

+ Bootstrap
+ jQuery
+ Font-Awesome

## Getting Started

### Load Required Stylesheets
```css
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
 <link rel="stylesheet" href="css/milestones.css">
 ```

### Load Required Libraries
 ```javascript
 <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
 <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
 <script type="text/javascript" src="js/milestones.js"></script>
```

### Add a Container for the Milestones
Make sure you apply the *milestones* class and give the container an ID.
```html
<div class="milestones" id="ms1"></div>
```

### Instantiate the Plugin
This will apply default values and display the milestones.
```javascript
<script>
    $(function(){
        $('#ms1').milestones();
    });
</script>
```
 
### Add Options
This will control the labels, the progress and the checkmarks.
```javascript
<script>
    $(function(){
        $('#ms1').milestones({
            stage: 2,  // progress to the 2nd milestone
            checks: 1, // apply a checkmark to the 1st milestone
            checkclass: 'checks', // apply this class to the checkmarks
            stageclass: 'doneclass', // apply this class to the completed tickmarks
            labels: ["Pre-Submission","Concept","Preliminary","Final"]  // array of labels
        });
    });
</script>
```
