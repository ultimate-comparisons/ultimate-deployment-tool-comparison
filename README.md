# Ultimate Deployment Tool Comparison

[![Build Status](https://travis-ci.org/ultimate-comparisons/ultimate-deployment-tool-comparison.svg?branch=master)](https://travis-ci.org/ultimate-comparisons/ultimate-deployment-tool-comparison)

This is an ultimate comparison of deployment tools.

## Test it
1. Install [node.js](https://nodejs.org/en/)
2. Intall [Java JDK8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
3. Install [pandoc](http://pandoc.org/installing.html) (Version 1.17.2) [pandoc-citeproc](https://hackage.haskell.org/package/pandoc-citeproc)
        
        wget https://github.com/jgm/pandoc/releases/download/1.17.2/pandoc-1.17.2-1-amd64.deb
        sudo dpkg -i pandoc-1.17.2-1-amd64.deb
        
4. Update npm (sudo): `npm install -g npm`
5. Test dependencies:

        java -version
        npm -version

6. `npm install`
7. `npm start` (starts the web page)
8. [Setup automatic deployment of `www` directory using Travis CI](https://github.com/ultimate-comparisons/ultimate-comparison-BASE/wiki/Build-and-deploy-project-with-Travis-CI)


## Ultimate-Deployment-Tool-Comparison Element Specification
The code below shows a sample element.

    # Deployment Tool Element - http://example.com
    Element short description ...
    
    ## Host OS
    - Windows
    - Mac
    - Linux
    
    ## Guest OS
    - Windows
    - Mac
    - Linux
    
    ## Elastic Infrastructure Restrictions
    - None
    
    ## Failure/Error handling
    - Topology Error Handling
    
    ## Reversability to defined state
    - Yes

    ## Status Report
    - Detailed
    
    ## Support of Migration Paths
    - Yes
    
    ## Extensibility
    - Plugins
    - Scripts
    - Store
    
    ## Secure Connection between Nodes
    - Self implemented
    - SSH/SSL
    
    ## Covers full range of Provisioning
    - Installing
    - Configuring
    - Starting
    
    ## Covers full range of Life Cycle
    - Provisioning
    - Management
    - Termination

    ## Unattended topology deployment
    - Yes
    
    ## Scalability
    - Vertically

    ## End user support
    - Free
    - Commercial

    ## Development Status
    - Stale



## License

The code is licensed under [MIT], the content (located at `comparison-elements`) under [CC-BY-SA-4.0].

  [MIT]: https://opensource.org/licenses/MIT
  [CC-BY-SA-4.0]: http://creativecommons.org/licenses/by-sa/4.0/
