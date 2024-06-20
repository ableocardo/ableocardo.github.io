// Functions for each action-command.

function loadContent() {
    about();
    news();
    contact();
    publication();
    cv();
}


function about() {
    document.getElementById('aboutSection').innerHTML = `
    <div style='padding: 20px; display: flex; flex-direction: column; align-items: center;'>
        <img src='./src/profile.png' alt='Ayush' style='border-radius: 50%; width: 280px; height: 280px; object-fit: cover; margin-bottom: 20px;'>
        <div style='text-align: center;'>
            <span style='font-size: 24px; color:#58d49f;'>Hey, I am Ayush!</span><br>
        </div>
        <div style='margin-top: 20px; width: 100%;'>
            <p style='font-size:15px; text-align:justify; line-height:1.6;'>I am a Platform Software Engineer II at <a href='https://www.akamai.com/' style='text-decoration:underline; text-decoration-style: dotted;'>Akamai</a>. Before that, I worked as a research assistant with <a href=\"https://cs.brown.edu/~tab/\" style=\"text-decoration:underline; text-decoration-style: dotted;\">Theophilus Benson</a>, and <a href=\"http://nikos.vasilak.is/\" style=\"text-decoration:underline; text-decoration-style: dotted;\">Nikos Vasilakis</a> at Brown University and <a href=\"https://scholar.google.com/citations?user=9-0yX78AAAAJ&hl=en\" style=\"text-decoration:underline; text-decoration-style: dotted;\">Marco Ruffini</a> during my time as Research Assistant at <a href=\"https://connectcentre.ie/\" style=\"text-decoration:underline; text-decoration-style: dotted;\">CONNECT</a>. 
            Prior to that, I had the opportunity to work with <a href=\"https://homepages.inf.ed.ac.uk/ppatras/\" style=\"text-decoration:underline; text-decoration-style: dotted;\">Paul Patras</a> at the School of informatics, the University of Edinburgh in the field of Mobile Edge Computing. I am broadly interested in SDN, edge computing, and distributed systems at scale (microservices) and curious about their mix-match. <br><br> I graduated from Brown University with a master's in Computer Science and IIT Roorkee with a first-class Bachelor's degree in Electrical Engineering. I was an intern in R&D at Nutanix (US - 2022) and STMicroelectronics (India - 2017). Parallel to my internship at STMicroelectronics, I was also awarded the prestigious Summer Undergraduate Research Award by Sponsored Research and Industrial Collaboration (SRIC) IIT Roorkee.
            Please feel free to <a href='mailto:abhardwaj@ee.iitr.ac.in' style='text-decoration:underline; text-decoration-style: dotted;'>reach out</a> in case we can collaborate for research!</p>
        </div>
    </div>`;
}


function news() {
    document.getElementById('newsSection').innerHTML = `
    <div style='padding: 20px;'>
        <div>
        <h2 style="text-align:left; margin-bottom: 20px;"><span style="color:#eb926d;"> News:</span></h2>
        </div>
        <div>
        <table style="width:90%; text-align:left;">
            <tr>
                <td style="vertical-align: top; padding-bottom: 20px;">June<br> 2024</td>
                <td style="line-height: 1.6; padding-bottom: 20px;">Our study on challenges in eBPF application development has been accepted at <a href="https://conferences.sigcomm.org/sigcomm/2024/workshop/ebpf/" style="text-decoration:underline; text-decoration-style: dotted;">eBPF'24</a>, co-located with SIGCOMM'24.</td>
            </tr>
            <tr>
                <td style="vertical-align: top; padding-bottom: 20px;">May<br> 2024</td>
                <td style="line-height: 1.6; padding-bottom: 20px;">Excited to join Artifact Evaluation Committee for <a href="https://www.usenix.org/conference/osdi24/call-for-artifacts" style="text-decoration:underline; text-decoration-style: dotted;">OSDI'24</a> and <a href="https://www.usenix.org/conference/atc24/call-for-artifacts" style="text-decoration:underline; text-decoration-style: dotted;">ATC'24</a>  !</td>
            </tr>
            <tr>
                <td style="vertical-align: top; padding-bottom: 20px;">December 2023</td>
                <td style="line-height: 1.6; padding-bottom: 20px;">Study on Complexities of the Cloud-Native World, got published in IEEE Communication Society Conference <a href="https://ieeexplore.ieee.org/abstract/document/10365297" style="text-decoration:underline; text-decoration-style: dotted;">CommNet'23</a></td>
            </tr>
            <tr>
                <td style="vertical-align: top; padding-bottom: 20px;">November 2023</td>
                <td style="line-height: 1.6; padding-bottom: 20px;">Excited to join Shadow Program Committee for <a href="http://2024.eurosys.org/" style="text-decoration:underline; text-decoration-style: dotted;">EuroSys'24</a>!</td>
            </tr>
            <tr>
                <td style="vertical-align: top; padding-bottom: 20px;">September 2023</td>
                <td style="line-height: 1.6; padding-bottom: 20px;">Excited to join Artifact Evaluation Committee for <a href="https://sysartifacts.github.io/eurosys2024/organizers" style="text-decoration:underline; text-decoration-style: dotted;">EuroSys'24</a>!</td>
            </tr>
            <tr>
                <td style="vertical-align: top; padding-bottom: 20px;">July <br>2023</td>
                <td style="line-height: 1.6; padding-bottom: 20px;">Excited to join Artifact Evaluation Committee for <a href="https://sysartifacts.github.io/sosp2023/organizers" style="text-decoration:underline; text-decoration-style: dotted;">SOSP'23</a>!</td>
            </tr>
            <tr>
                <td style="vertical-align: top; padding-bottom: 20px;">January<br> 2023</td>
                <td style="line-height: 1.6; padding-bottom: 20px;">Joined Akamai's Compute Division as Platform Software Engineer.</td>
            </tr>
            <tr>
                <td style="vertical-align: top; padding-bottom: 20px;">April<br> 2022</td>
                <td style="line-height: 1.6; padding-bottom: 20px;"><a href="https://conferences.sigcomm.org/events/apnet2022/papers/kubeklone_camera_ready.pdf" style="text-decoration:underline; text-decoration-style: dotted;">KubeKlone</a>, our digital twin for cloud and edge microservices has been accepted at APNET'22.</td>
            </tr>
            <tr>
                <td style="vertical-align: top; padding-bottom: 20px;">April<br> 2022</td>
                <td style="line-height: 1.6; padding-bottom: 20px;">Awarded the Dan Kohn Scholarship Fund (Virtual) for KubeCon'22 Europe.</td>
            </tr>
        </table>
        </div>
    </div>`;
}



function cv() {
    document.getElementById('cvSection').innerHTML = `
    <div style='padding: 20px;'>
        <span style="color:#8abeb7;">
            <h2 style="text-align:left; margin-right: 10px;"> CV:</h2>
        </span>
        <p style="text-align: left;">Download from <a href="src/cv.pdf" target="_blank" style="text-decoration: underline;">here</a>.</p>
    </div>`;
}

function contact() {
    document.getElementById('contactSection').innerHTML = `
    <div style='padding: 20px;'>
        <span style="color: #b5bd68;">
            <h2 style="text-align:left; margin-right: 10px;"> I am everywhere:<tab></h2>
        </span>
        <div style="display: flex; gap: 30px;">
            <a href="https://www.linkedin.com/in/abhardwaj15/" target="_blank" style="text-decoration: none; color: #171515; font-weight: bold;">
                <i class="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://www.github.com" target="_blank" style="text-decoration: none; color: #171515; font-weight: bold;">
                <i class="fab fa-github fa-2x"></i>
            </a>
            <a href="mailto:abhardwaj@ee.iitr.ac.in" target="_blank" style="text-decoration: none; color: #171515; font-weight: bold;">
                <i class="fa fa-envelope fa-2x"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100000971491509&ref=bookmarks" target="_blank" style="text-decoration: none; color: #171515; font-weight: bold;">
                <i class="fab fa-facebook fa-2x"></i>
            </a>
        </div>
    </div>`;
}


function publication() {
    document.getElementById('publicationSection').innerHTML = `
    <div style='padding: 20px;'>
        <span style="color: #b5bd68;">
            <h2 style="text-align:left; margin-bottom: 20px;"><a href="https://scholar.google.com/citations?user=hrzbQVQAAAAJ&hl=en" target="_blank"><i class="ai ai-google-scholar-square"></i></a> Selected Publications:</h2>
        </span>
        <ol style="text-align: left; line-height: 1.6; padding-left: 20px;">
            <li>Ayush Bhardwaj, and Theophilus A. Benson. "KubeKlone: A Digital Twin for Simulating Edge and Cloud Microservices." In 6th Asia‑PacificWorkshop on Networking (APNet 2022)
            <a href="https://conferences.sigcomm.org/events/apnet2022/papers/kubeklone_camera_ready.pdf" target="_blank"><i class="fa fa-external-link"></i></a></li>
            <li>Ayush Bhardwaj, Zhenyu Zhou, and Theophilus A. Benson. "A Comprehensive Study of Bugs in Software Defined Networks." In 2021 51st Annual IEEE/IFIP International Conference on Dependable Systems and Networks (DSN), pp. 101‑115. IEEE, 2021.
            <a href="https://ieeexplore.ieee.org/document/9505089" target="_blank"><i class="fa fa-external-link"></i></a></li>
            <li>B. Lantz, J. Yu, A. Bhardwaj, A. A. Díaz-Montiel, A. Quraishy, S. Santaniello, T. Chen, R. Fujieda, A. Mukhopadhyay, G. Zussman, M. Ruffini, and D. Kilper, "SDN-controlled Dynamic Front-haul Provisioning, Emulated on Hardware and Virtual COSMOS Optical x-Haul Testbeds," in Optical Fiber Communication Conference (OFC) 2021, P. Dong, J. Kani, C. Xie, R. Casellas, C. Cole, and M. Li, eds., OSA Technical Digest (Optica Publishing Group, 2021), paper M2B.8.
            <a href="https://opg.optica.org/abstract.cfm?uri=ofc-2021-M2B.8" target="_blank"><i class="fa fa-external-link"></i></a></li>
        </ol>
    </div>`;
}
