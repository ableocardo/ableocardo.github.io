// Functions for each action-command.

function help(){
  return "<h2><span style=\"color:#eb926d;\">Help:</span></h2><table>\
  <tr>\
    <td>all</td>\
    <td>Reveal Everything!</td>\
  </tr>\
  <tr>\
    <td>about</td>\
    <td>Summary about me.</td>\
  </tr>\
  <tr>\
    <td>contact</td>\
    <td>How to get in touch with me.</td>\
  </tr>\
  <tr>\
    <td>news</td>\
    <td>What's the latest updates.</td>\
  </tr>\
  <tr>\
    <td>publication</td>\
    <td>Find selected papers, I have published.</td>\
  </tr>\
  <tr>\
    <td>cv</td>\
    <td>Download my CV.</td>\
  </tr>\
  <tr></table>";
}

function news(){
  return "<h2><span style=\"color:#eb926d;\"><i style='font-size:24px' class='fas'>&#xf0a1;</i> News:</span></h2>\
          <table style=\"width:70%;\">\
                <tr>\
                  <td>July 2023</td>\
                  <td>Excited to join Artifact Evaluation Committee for <a href=\"https://sysartifacts.github.io/sosp2023/organizers\" style=\"text-decoration:underline; text-decoration-style: dotted;\">SOSP'23</a>!</td>\
                </tr>\
                <tr>\
                  <td>January 2023</td>\
                  <td>Joined Akamai's Compute Division as Platform Software Engineer.</td>\
                </tr>\
                <tr>\
                  <td>May 2022</td>\
                  <td>Joined Nutanix's Software Defined Networking Team as an Intern.</td>\
                </tr>\
                <tr>\
                  <td>April 2022</td>\
                  <td><a href=\"https://conferences.sigcomm.org/events/apnet2022/papers/kubeklone_camera_ready.pdf\" style=\"text-decoration:underline; text-decoration-style: dotted;\">KubeKlone</a>, our digital twin for cloud and edge microservices has been accepted at APNET'22.</td>\
                </tr>\
                <tr>\
                  <td>April 2022</td>\
                  <td>Awarded the Dan Kohn Scholarship Fund (Virtual) for KubeCon'22 Europe.</td>\
                </tr>\
                <tr>\
                  <td>March 2021</td>\
                  <td>Our <a href=\"https://ieeexplore.ieee.org/document/9505089\" style=\"text-decoration:underline; text-decoration-style: dotted;\">comprehensive study on bugs in SDN</a> has been accepted at DSN'21.</td>\
                </tr>\
                <tr>\
                  <td>March 2021</td>\
                  <td>Our paper on gOSNR based QoT Estimation and a demo on Virtual Optical x-Haul Testbed have been accepted at OFC'21.</td>\
                </tr>\
                <tr>\
                  <td>January 2021</td>\
                  <td>Joined Brown Computer Science as a graduate student.</td>\
                </tr>\
            </table>";
}

function about(){
  return "<span style=\"color:#58d49f;\"><h2><i style='font-size:24px' class='fas'>&#xf3e0;</i> About Me:</h2></span><p style=\"width: 70%; font-size: 20px;\">I am a Platform Software Engineer at <a href=\"https://www.akamai.com/\" style=\"text-decoration:underline; text-decoration-style: dotted;\">Akamai</a>. Before that, I worked as a research assistant with <a href=\"https://cs.brown.edu/~tab/\" style=\"text-decoration:underline; text-decoration-style: dotted;\">Theophilus Benson</a>, and <a href=\"http://nikos.vasilak.is/\" style=\"text-decoration:underline; text-decoration-style: dotted;\">Nikos Vasilakis</a> at Brown University and <a href=\"https://scholar.google.com/citations?user=9-0yX78AAAAJ&hl=en\" style=\"text-decoration:underline; text-decoration-style: dotted;\">Marco Ruffini</a> during my time as Research Assistant at <a href=\"https://connectcentre.ie/\" style=\"text-decoration:underline; text-decoration-style: dotted;\">CONNECT</a>. Prior to that, I had the opportunity to work with <a href=\"https://homepages.inf.ed.ac.uk/ppatras/\" style=\"text-decoration:underline; text-decoration-style: dotted;\">Paul Patras</a> at the School of informatics, the University of Edinburgh in the field of Mobile Edge Computing. I am broadly interested in SDN, edge computing, and distributed systems at scale (microservices) and curious about their mix-match. <br><br> I graduated from Brown University with a master's in Computer Science and IIT Roorkee with a first-class Bachelor's degree in Electrical Engineering. I was an intern in R&D at Nutanix (US - 2022) and STMicroelectronics (India - 2017). Parallel to my internship at STMicroelectronics, I was also awarded the prestigious Summer Undergraduate Research Award by Sponsored Research and Industrial Collaboration (SRIC) IIT Roorkee. <br><br> \
  Please feel free to <a href=\"mailto:abhardwaj@ee.iitr.ac.in\" style=\"text-decoration:underline; text-decoration-style: dotted;\">reach out</a> in case we can collaborate for research!</p>";
}

function cv(){
  return "<span style=\"color:#8abeb7;\"><h2><i style='font-size:24px' class='far'>&#xf15c;</i> CV:</h2></span><p>\tDownload from <a href=\"src/cv.pdf\" target=\"_blank\" style=\"text-decoration: underline;\">here</a>.</p>";
}

function credits(){
  return "<p>Built by <a href=\"https://www.github.com/CedArctic\" target=\"_blank\"><i class=\"fab fa-github\"></i> CedArctic</a></p>";
}

function contact(){
  return "<span style=\"color: #b5bd68;\"><h2><i style='font-size:24px' class='far'>&#xf2bb;</i> I am everywhere:</h2></span><ul>\
  <li><a href=\"https://www.linkedin.com/in/abhardwaj15/\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i> LinkedIn</a></li>\
  <li><a href=\"https://www.github.com\" target=\"_blank\"><i class=\"fab fa-github\"></i> Github</a></li>\
  <li><a href=\"mailto:abhardwaj@ee.iitr.ac.in\" target=\"_blank\"><i class=\"fa fa-envelope\"></i> Mail</a></li>\
  <li><a href=\"https://www.facebook.com/profile.php?id=100000971491509&ref=bookmarks\" target=\"_blank\"><i class=\"fab fa-facebook\"></i> Facebook</a></li>\
  </ul>";
}

function publication(){
  return "<span style=\"color: #b5bd68;\"><h2><a href=\"https://scholar.google.com/citations?user=hrzbQVQAAAAJ&hl=en\" target=\"_blank\"><i class=\"ai ai-google-scholar-square\"></i></a> Selected Publications:</h2></span><ol>\
  <li>Ayush Bhardwaj, and Theophilus A. Benson. \"KubeKlone: A Digital Twin for Simulating Edge and Cloud Microservices.\" In 6th Asia‑PacificWorkshop on Networking (APNet 2022)\
  <a href=\"https://conferences.sigcomm.org/events/apnet2022/papers/kubeklone_camera_ready.pdf\" target=\"_blank\"><i class=\"fa fa-external-link\"></i></a></li><br>\
  <li>Ayush Bhardwaj, Zhenyu Zhou, and Theophilus A. Benson. \"A Comprehensive Study of Bugs in Software Defined Networks.\" In 2021 51st Annual IEEE/IFIP International Conference on Dependable Systems and Networks (DSN), pp. 101‑115. IEEE, 2021.\
  <a href=\"https://ieeexplore.ieee.org/document/9505089\" target=\"_blank\"><i class=\"fa fa-external-link\"></i></a></li><br>\
  <li> B. Lantz, J. Yu, A. Bhardwaj, A. A. Díaz-Montiel, A. Quraishy, S. Santaniello, T. Chen, R. Fujieda, A. Mukhopadhyay, G. Zussman, M. Ruffini, and D. Kilper, \"SDN-controlled Dynamic Front-haul Provisioning, Emulated on Hardware and Virtual COSMOS Optical x-Haul Testbeds,\" in Optical Fiber Communication Conference (OFC) 2021, P. Dong, J. Kani, C. Xie, R. Casellas, C. Cole, and M. Li, eds., OSA Technical Digest (Optica Publishing Group, 2021), paper M2B.8.\
  <a href=\"https://opg.optica.org/abstract.cfm?uri=ofc-2021-M2B.8\" target=\"_blank\"><i class=\"fa fa-external-link\"></i></a></li>\
  </ol>";
}

// Main Function
function commandProcessor(e){

  //Check if the enter key is pressed
  if(e.keyCode == 13){

    //Clear the area where info will be printed
    document.getElementById('injected').innerHTML= "";

    //Get user input
    var txtInput = document.getElementById('txtBox').value.toLowerCase();

    //Select what info to print according to command
    if(txtInput == "help"){
      document.getElementById('injected').innerHTML=help();
    }else if (txtInput=="all") {
      document.getElementById('injected').innerHTML=about() + "\n\n\n" + news() + "\n\n\n" + contact() + "\n\n\n" + cv();
    }else if (txtInput == "about") {
      document.getElementById('injected').innerHTML=about();
    }else if (txtInput == "contact") {
      document.getElementById('injected').innerHTML=contact();
    }else if (txtInput == "cv") {
      document.getElementById('injected').innerHTML=cv();
    }else if (txtInput=="news") {
      document.getElementById('injected').innerHTML=news();
    }else if (txtInput=="publication") {
      document.getElementById('injected').innerHTML=publication();
    }else if (txtInput == "credits") {
      document.getElementById('injected').innerHTML=credits();
    }else{
      document.getElementById('injected').innerHTML = help();
    }

    //Clear input text box
    document.getElementById('txtBox').value= "";
  }
}
