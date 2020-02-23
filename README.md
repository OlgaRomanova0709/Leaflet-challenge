# Visualizing Data with Leaflet

## Challenge desription

![1-Logo](Images/1-Logo.png)

The USGS (the United States Geological Survey) collects a massive amount of data from all over the world each day, I visualized their data and built an earthquake map.


### Visualization
I visualized an earthquake data set.
![2-BasicMap](Images/mypicture.png)



1. **Data**

   ![3-Data](Images/3-Data.png)

   The USGS provides earthquake data in a number of different formats, updated every 5 minutes. I picked a JSON data set from [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page to visualize.

   ![4-JSON](Images/4-JSON.png)

2. **Import & Visualize the Data**

   I created a map using Leaflet that plots all of the earthquakes from this data set based on their longitude and latitude. 
   *  Data markers reflect the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes appear larger and darker in color.

   * Visualization includes popups that provide additional information about the earthquake when a marker is clicked.

   * I created a legend that will provide context for this map data.
