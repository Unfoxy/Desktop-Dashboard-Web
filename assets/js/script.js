document.addEventListener("DOMContentLoaded", function () {
    const subMenus = document.querySelectorAll(".sub-menu");
  
    subMenus.forEach((subMenu) => {
      subMenu.style.display = "none";
    });
  
    const menuItemsWithSubmenus = document.querySelectorAll(".main-menu li");
  
    menuItemsWithSubmenus.forEach((menuItem) => {
      menuItem.addEventListener("click", function () {
        const subMenu = this.querySelector(".sub-menu");
        if (subMenu) {
          if (subMenu.style.display === "none" || subMenu.style.display === "") {
            subMenu.style.display = "block";
          } else {
            subMenu.style.display = "none";
          }
        }
      });
    });
  });

// var mainList = document.querySelector("sub-menu");
// mainList.addEventListener("click", function() {
//   var clickedText = event.target.textContent.trim();
//   switch (clickedText) {
//     case "Look Up User":
//       window.location.href = "utilityTools-lookUpUsers.html";
//       break;
//     case "Ping PC":
//       window.location.href = "utilityTools-pingPc.html";
//       break;
//     case "Data Migration":
//       window.location.href = "utilityTools-dataMigration.html";
//       break;
//     default:
//       break;
//   }
// });