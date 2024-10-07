window.onload = function(){
    const skills = [   {
        "icon": "../image/icons/python.png",
        "tooltip": "Python Programming",
        "alt": "Python Icon",
        "color": ""
    },
    {
        "icon": "../image/icons/c-sharp.png",
        "tooltip": "C Sharp Programming",
        "alt": "Csharp Icon",
        "color": ""
    },
    {
        "icon": "../image/icons/github.png",
        "tooltip": "Github cli",
        "alt": "Github Icon",
        "color": "white"
    },
    {
        "icon": "../image/icons/windows.png",
        "tooltip": "windows xp,7,10,11 client",
        "alt": "windows client Icon",
        "color": ""
    },
    {
        "icon": "../image/icons/cloud.png",
        "tooltip": "Cloud computing",
        "alt": "Cloud Icon"  ,
        "color": "white"  
    },
    {
        "icon": "../image/icons/html.png",
        "tooltip": "HTML Programming",
        "alt": "HTML Icon",
        "color": ""
    },
    {
        "icon": "../image/icons/printer.png",
        "tooltip": "printer",
        "alt": "printer Icon",
        "color": "white"

    },
    {
        "icon": "../image/icons/computer.png",
        "tooltip": "windows server 2012 r2, 2008 r2, 2016,2022",
        "alt": "windows server icon",
        "color": ""
    },
    {
        "icon": "../image/icons/linux.png",
        "tooltip": "linux ubuntu",
        "alt": "linux ubuntu Icon",
        "color": ""
    },
    {
        "icon": "../image/icons/db.png",
        "tooltip": "database",
        "alt": "database Icon",
        "color": "white"
    },
    {
        "icon": "../image/icons/js.png",
        "tooltip": "javascript experience",
        "alt": "javascript Icon",
        "color": ""
    },
    {
        "icon": "../image/icons/motherboard.png",
        "tooltip": "Hardware knowledge",
        "alt": "motherboard Icon",
        "color": "white"
    },
    {
        "icon": "../image/icons/nas.png",
        "tooltip": "network attached storage (NAS)",
        "alt": "nas Icon",
        "color": "white"
    },
    {
        "icon": "../image/icons/office.png",
        "tooltip": "office 2007, 2016,  2021, 365",
        "alt": "office Icon",
        "color": ""
    },
    {
        "icon": "../image/icons/servers.png",
        "tooltip": "server hardware",
        "alt": "servers icon",
        "color": "white"
    },    
    {
        "icon": "../image/icons/troubleshooting.png",
        "tooltip": "troubleshooting efficiency",
        "alt": "troubleshooting icon",
        "color": "white"
    },    
    {
        "icon": "../image/icons/virtualization.png",
        "tooltip": "virtual setup vmware (mac, windows), virtual box",
        "alt": "virtualization icon",
        "color": "white"
    },    
    {
        "icon": "../image/icons/web.png",
        "tooltip": "docker installation, setup",
        "alt": "docker icon",
        "color": "white"
    },
    {
        "icon": "../image/icons/router.png",
        "tooltip": "router knowledge, apn, nat, port forwarding, log reading",
        "alt": "router icon",
        "color": "white"
    },
    {
        "icon": "../image/icons/terminal.png",
        "tooltip": "Cmd/Powershell/Bash scripting/commands",
        "alt": "Terminal Icon",
        "color": ""
    }
]

    const container = document.querySelector('.center-skill-container');
    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;

    const centerElement = document.querySelector('#center-skill');
    const centerRect = centerElement.getBoundingClientRect();
    const centerX = centerRect.left + centerRect.width / 2;
    const centerY = centerRect.top + centerRect.height / 2;
    
    const rowHeight = 100; // Starting radius for the first circle
    // let currentRadius = baseRadius;
    // let currentIcons = 3; // Start with 3 icons in the first circle
    let iconsPlaced = 0;
    
    // skills.forEach((skill, index) => {
    //   const iconElement = document.createElement("img");
    //   iconElement.src = skill.icon;
    //   iconElement.alt = skill.alt;
    //   iconElement.classList.add("skill-icon")
    //   if (skill.color === "white"){
    //       iconElement.classList.add("white-icon")
    //   }
    
    //   // Set tooltips
    //   iconElement.title = skill.tooltip;
    
    //   // Calculate position based on angle and current circle
    //   const angle = (iconsPlaced / currentIcons) * 2 * Math.PI; // Angle in radians
    //   const x = currentRadius * Math.cos(angle);
    //   const y = currentRadius * Math.sin(angle);
    
    //   iconElement.style.position = "absolute";
    //   iconElement.style.left = `calc(50% + ${x}px)`;
    //   iconElement.style.top = `calc(50% + ${y}px)`;
    
    //   container.appendChild(iconElement); // Add to the DOM
    
    //   iconsPlaced++;
    
    //   // If we've placed all icons for the current circle, move to the next circle
    //   if (iconsPlaced >= currentIcons) {
    //     currentRadius += 50; // Increase the radius for the next circle
    //     currentIcons += 5; // Increase the number of icons for the next circle
    //     iconsPlaced = 0; // Reset the placed icons count for the new circle
    //   }
    // });
    skills.forEach((skill, index) => {
        const iconElement = document.createElement("img");
        iconElement.src = skill.icon;
        iconElement.alt = skill.alt;
        iconElement.classList.add("skill-icon")
        // Apply color styling
        if (skill.color === "white") {
            iconElement.classList.add("white-icon")
        }
      
        // Set tooltips
        iconElement.title = skill.tooltip;
      
        let row = Math.floor(index / 5); // Calculate which row the icon is in
        let rowType = row % 2 === 0 ? 'even' : 'odd'; // Odd or even row
        
        let col = index % 5; // Which column the icon is in
      
        let x, y;
      
        // Even rows with 5 icons, skip the middle column (col === 2)
        if (rowType === 'even') {
          if (col === 2) {
            iconsPlaced--; // Skip the middle for even rows
            return;
          }
          x = (col > 2 ? col + 1 : col) * (containerWidth / 6); // Skip the center column
          y = centerY - row * rowHeight;
        }
      
        // Odd rows with 3 icons, placed between the even-row columns
        else {
          x = (col + 1.5) * (containerWidth / 4); // Offset for odd row positioning
          y = centerY - (row + 1) * rowHeight;
        }
      
        iconElement.style.position = "inline-block";
        iconElement.style.left = `${x}px`;
        iconElement.style.top = `${y}px`;
      
        container.appendChild(iconElement);
        iconsPlaced++;
      });

}
