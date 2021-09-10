function choose(group) {
  let all = document.getElementsByClassName("template"),
  printTemplate = document.getElementsByClassName("print-template"),
  webTemplate = document.getElementsByClassName("web-template"),
  userInterface = document.getElementsByClassName("user-interface"),
  mockUp = document.getElementsByClassName("mock-up");


  for(let i = 0; i < all.length; i++) {
    all[i].style.display = "none";
  }

  if(group == "print template") {
    for(let i = 0; i < printTemplate.length; i++) {
      printTemplate[i].style.display = "block";
    }
  } else if(group == "web template") {
    for(let i = 0; i < webTemplate.length; i++) {
      webTemplate[i].style.display = "block";
    }
  } else if(group == "user interface") {
    for(let i = 0; i < userInterface.length; i++) {
      userInterface[i].style.display = "block";
    }
  } else if(group == "mock-up") {
    for(let i = 0; i < mockUp.length; i++) {
      mockUp[i].style.display = "block";
    }
  } else {
    for(let i = 0; i < all.length; i++) {
      all[i].style.display = "block";
    }
  }
}