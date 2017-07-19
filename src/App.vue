<!--
<template>
  <v-app light>

    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile 
          v-for="item in menuItems" 
          :key="item.title"
          router
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>    
    </v-navigation-drawer>

    <v-toolbar dark class="primary">
      <v-toolbar-side-icon 
        @click.native.stop="sideNav = !sideNav"
        class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title><router-link to="/" tag="span" style="cursor: pointer">Dinamic Demand Console</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toobar-items class="hidden-sm-and-down">
        <v-btn 
          flat
          v-for="item in menuItems" 
          :key="item.title"
          router
          :to="item.link">
          <v-icon dark left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toobar-items>      
    </v-toolbar>

    <main>
      <router-view></router-view>
    </main>

  </v-app>
</template> -->

<template>
  <v-app id="example-2" standalone>
    <v-navigation-drawer
      temporary
      v-model="drawer" 
      :mini-variant.sync="mini" 
      light 
      overflow
      absolute
    >
      <v-list class="pa-0">
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="http://www.openenergi.com/wp-content/uploads/2015/11/oe-sm.png" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Dinamic Demand Console</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click.native.stop="mini = !mini">
              <v-icon>keyboard_arrow_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile 
          v-for="item in menuItems" 
          :key="item.title"
          to
          :to="item.link">
          <v-list-tile-action>
            <v-icon :title="item.title">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed class="primary" dark>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title><router-link to="/" tag="span" style="cursor: pointer">Open Energi</router-link></v-toolbar-title>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>



<script>
  // import Home from '@components/Home'
  
  export default {
    data () {
      return {
        // sideNav: false,
        drawer: false,
        mini: false,
        menuItems: [
          { icon: 'home', title: 'Home', link: '/' },
          { icon: 'view_column', title: 'Entities', link: '/entities' },
          { icon: 'view_module', title: 'Services', link: '/services' },
          { icon: 'trending_up', title: 'Plots', link: '/plots' }
          // { icon: 'face', title: 'Sign up', link: '/signup' },
          // { icon: 'lock_open', title: 'Sign in', link: '/signin' }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
