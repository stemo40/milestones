.. milestones documentation master file, created by
   sphinx-quickstart on Thu Jan 25 18:52:19 2018.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

==========
Background
==========

Before we get to the code examples and how to include it in your html page, there's a couple of things to highlight first.


Requirements
============

Milestones is dependant on three external libraries which are listed below:

* Bootstrap
* jQuery
* Font-Awesome

===============
Getting Started
===============

To begin, you need to ensure that the stylesheets and the javascript libraries are included in your html file.


Required Stylesheets
====================

Load the requred external Stylesheets::

 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
 <link rel="stylesheet" href="css/milestones.css">



Required Libraries
==================

Include the required javascript libraries::

 <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
 <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
 <script type="text/javascript" src="js/milestones.js"></script>


Add a Container 
===============

Make sure you apply the *milestones* class and give the container an ID::

<div class="milestones" id="ms1"></div>

Instantiate the Plugin
======================

This will apply default values and display the *milestones*.

.. code-block:: livescript

	<script>
	   $(function(){
	       $('#ms1').milestones();
	   });
	</script>


Add Options
===========

This will control the labels, the progress and the checkmarks.

.. code-block:: lasso

	<script>
	  $(function(){
	     $('#ms1').milestones({
	         position: 2,  // progress to the 2nd milestone
	         checks: 1, // apply a checkmark to the 1st milestone
	         checkclass: 'ms-checkmark', // apply this class to the checkmarks
	         msclass: 'doneclass', // apply this class to the completed tickmarks
	         labels: ["Stage 1","Stage 2","Stage 3","Stage 4"]  // array of labels
	     });
	  });
	</script>
