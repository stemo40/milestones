.. milestones documentation master file, created by
   sphinx-quickstart on Thu Jan 25 18:52:19 2018.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.
.. toctree::
   :maxdepth: 2
   :caption: Contents:

		index
		new_file
		test_file
		readme

Indices and tables
==================

* :ref:`new_file`
* :ref:`test_file`
* :ref:`readme`


*********************
Welcome to Milestones
*********************

Milestones is a jQuery plugin that displays a timeline with milestones. The milestones are evenly separated along the timeline with labels underneath. Once a milestone is met, you can check it off and move to the next one. 

Online Demo
===========

Click this link to take you to a demo page that displays the plugin in real time. Be sure to view the source to see how to set it up and options available.

* `Demo <https://stemo40.github.io/milestones/>`_

Background
==========

Before we get to the code examples and how to include it in your html page, there's a couple of things to highlight first.

============
Requirements
============

Milestones is dependant on three external libraries which are listed below:

* Bootstrap
* jQuery
* Font-Awesome

Getting Started
===============

To begin, you need to ensure that the stylesheets and the javascript libraries are included in your html file.

====================
Required Stylesheets
====================

Load the requred external Stylesheets::

 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
 <link rel="stylesheet" href="css/milestones.css">


==================
Required Libraries
==================

Include the required javascript libraries::

 <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
 <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
 <script type="text/javascript" src="js/milestones.js"></script>

===============
Add a Container 
===============

Make sure you apply the *milestones* class and give the container an ID::

<div class="milestones" id="ms1"></div>

======================
Instantiate the Plugin
======================

This will apply default values and display the *milestones*.::

	<script>
	   $(function(){
	       $('#ms1').milestones();
	   });
	</script>

===========
Add Options
===========

This will control the labels, the progress and the checkmarks.::

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
