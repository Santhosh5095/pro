var menuList = document.getElementById("menuList");

        menuList.style.maxheight = "35px";

        function togglemenu() {

            if (menuList.style.maxheight == "35px") {
                menuList.style.maxheight = "200px";
            }
            else {
                menuList.style.maxheight = "35px";
            }
        }