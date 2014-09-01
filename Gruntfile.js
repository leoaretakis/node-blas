module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      files: '<%= jshint.files %>',
      tasks: ['default', 'unit']
    },

    jshint: {
      files: ['Gruntfile.js', 'lib/**/*.js', 'v*/**/*.js', 'spec/**/*.js', 'spec/**/*.json'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        jquery: true,
        globals: {
          _: false,
          console: false,
          expect: false,
          describe: false,
          before: false,
          beforeEach: false,
          afterEach: false,
          it: false,
          xit: false,
          setup: false,
          suite: false,
          teardown: false,
          test: false,
          jasmine: false,
          module: false,
          spyOn: false,
          require: false,
          __dirname: false,
          waits: false,
          waitsFor: false,
          runs: false,
          exports: false,
          process: false
        }
      }
    },

    bgShell: {
      coverage: {
        cmd: 'node node_modules/istanbul/lib/cli.js cover --dir build/coverage jasmine-node -- spec --forceexit'
      }
    },

    jasmine_node: {
      options: {
        forceExit: true,
        extensions: 'js',
        specNameMatcher: '_spec',
        growl: true,
        isVerbose: false
      },
      unit: {
        projectRoot: './spec/unit'
      }
    },

    env: {
      test: {
        NODE_ENV : 'test'
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-bg-shell');
  grunt.loadNpmTasks('grunt-env');


  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('unit', ['env:test', 'jasmine_node:unit']);
  grunt.registerTask('cover', ['bgShell:coverage']);
  grunt.registerTask('test', ['unit']);

};
