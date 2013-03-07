'use strict';

$(document).ready(function(){
    $(".video").fitVids();
  });

var TAN = {
  init: function() {
    this.menuExpanded = false;
    this.getSelectors();
    this.setEvents();
  },
  getSelectors: function () {
    this.$menu = $('#menu');
    this.$menuButton = $('#menu-button');
    this.$navActions = $('.nav-action');
  },
  setEvents: function (){
    this.$menuButton.click(this.toggleMenu);
    this.$navActions.click(this.scrollNav);
    $(window).resize(this.resizeMenu);
  },
  hideMenu: function() {
    TAN.$menu.hide();
    TAN.menuExpanded = false;
  },
  resizeMenu: function() {
    if (window.matchMedia('(max-width: 35em)').matches) {
      TAN.hideMenu();
    } else {
      TAN.showMenu();
    }
  },
  scrollNav: function(event) {
    console.log($(this).attr('href')[0]);
    if ($(this).attr('href')[0] === "#") {
      event.preventDefault();
      var selected_id = $(this).attr('id');
      selected_id = selected_id.substring(0, selected_id.length - 4); // Length of '_nav' is 4
      var scrollPosition = $('#' + selected_id).position().top;
      if (TAN.menuExpanded) {
        scrollPosition -= 36; // Height of title bar is 36px
      }
      $('html, body').animate({
        scrollTop: scrollPosition
      }, 'slow');
      if (TAN.menuExpanded) {
        TAN.hideMenu();
      }
    }
  },
  showMenu: function() {
    TAN.$menu.show();
    TAN.menuExpanded = true;
  },
  toggleMenu: function(event) {
    event.preventDefault();
    if (TAN.menuExpanded) {
      TAN.hideMenu();
    } else {
      TAN.showMenu();
    }
  }
};

TAN.init();
