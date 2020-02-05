// Rover Object Goes Here
// ======================
let marsRoverKata1 = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: [],
    badgeNumber: "1"
  };
  
  /*let marsRoverKata2 = {
    direction: "N",
    x: 0,
    y: 10,
    travelLog: [],
    badgeNumber: "2"
  }; */
  
  /*let marsRoverKata3 = {
    direction: "N",
    x: 10,
    y: 10,
    travelLog: [],
    badgeNumber: "3"
  }; */
  
  
  
  // ======================
  
  let board = [ // o:OK , F:Fudge
    ['1','o','o','o','o','o','o','o','o','2'],
    ['o','o','o','o','o','o','o','o','o','F'],
    ['F','o','F','o','o','F','o','o','o','F'],
    ['o','o','o','o','o','o','o','o','o','o'],
    ['o','o','o','F','o','o','o','o','o','o'],
    ['o','o','o','o','F','o','o','o','o','F'],
    ['o','F','F','o','o','o','o','o','F','o'],
    ['o','o','o','o','o','F','o','o','o','o'],
    ['o','o','o','o','o','o','o','o','o','o'],
    ['o','o','o','o','o','o','o','o','o','o']];
  
  //a spare field declaration, just in case!
  /*let board = [ // o:open , c:close
    ['o','o','o','o','o','o','o','o','o','o'],
    ['o','o','o','o','o','o','o','o','o','o'],
    ['o','o','o','o','o','o','o','o','o','o'],
    ['o','o','o','o','o','o','o','o','o','o'],
    ['o','o','o','o','o','o','o','o','o','o'],
    ['o','o','o','o','o','o','o','o','o','o'],
    ['o','o','o','o','o','o','o','o','o','o'],
    ['o','o','o','o','o','o','o','o','o','o'],
    ['o','o','o','o','o','o','o','o','o','o'],
    ['o','o','o','o','o','o','o','o','o','o']]; */
  
  function turnLeft(rover){
    switch (rover.direction) {
      case "N":
        rover.direction = "W";
        break;
      case "W":
        rover.direction = "S";
        break;
      case "S":
        rover.direction = "E";
        break;
      case "E":
        rover.direction = "N";
        break;
      default:
        console.log("Well ... this is embarrasing!")
    };
    console.log(`turnLeft was called! Now the Rover is facing ${rover.direction}!`);
  }
  
  function turnRight(rover){
    switch (rover.direction) {
      case "N":
        rover.direction = "E";
        break;
      case "W":
        rover.direction = "N";
        break;
      case "S":
        rover.direction = "W";
        break;
      case "E":
        rover.direction = "S";
        break;
      default:
        console.log("Well ... this is embarrasing!")
    };
    console.log(`turnRight was called! Now the Rover is facing ${rover.direction}!`);
  }
  
  function moveForward(rover) {
    switch (rover.direction) {
      case "N":
        rover.y -= 1;
        console.log(`Rover's Current Position ( X: ${rover.x} , Y: ${rover.y} )`);
        break;
      case "W":
        rover.x -= 1;
        console.log(`Rover's Current Position ( X: ${rover.x} , Y: ${rover.y} )`);
        break;
      case "S":
        rover.y += 1;
        console.log(`Rover's Current Position ( X: ${rover.x} , Y: ${rover.y} )`);
        break;
      case "E":
        rover.x += 1;
        console.log(`Rover's Current Position ( X: ${rover.x} , Y: ${rover.y} )`);
        break;
      default:
        console.log("Well ... this is embarrasing!");
        break;
    }
  }
  
  function moveBackward(rover) {
    switch (rover.direction) {
      case "N":
        rover.y += 1;
        console.log(`Rover's Current Position ( X: ${rover.x} , Y: ${rover.y} )`);
        break;
      case "W":
        rover.x += 1;
        console.log(`Rover's Current Position ( X: ${rover.x} , Y: ${rover.y} )`);
        break;
      case "S":
        rover.y -= 1;
        console.log(`Rover's Current Position ( X: ${rover.x} , Y: ${rover.y} )`);
        break;
      case "E":
        rover.x -= 1;
        console.log(`Rover's Current Position ( X: ${rover.x} , Y: ${rover.y} )`);
        break;
      default:
        console.log("Well ... this is embarrasing!");
        break;
    }
  }
  
  //turnRight(marsRoverKata);
  //turnLeft(marsRoverKata);
  //moveForward(marsRoverKata);
  //moveBackward(marsRoverKata);
  
  //this is the moveRover for a single rover in a field with obstacles
  function moveRover(rover,field,command) {
    for (let i=0; i< command.length; i++) {
      if (!(command[i]=="f" || command[i]=="r" || command[i]=="l")){
        console.log(`${command[i]} is not a valid command! Try again with a valid command string!`);
        return -1;
      }
    }
    for (let i=0; i< command.length; i++) {
      switch (command[i]) {
        case "f": 
          if ((rover.y==0 && rover.direction=="N") || 
              (rover.x==0 && rover.direction=="W") || 
              (rover.y==10 && rover.direction=="S") || 
              (rover.x==10 && rover.direction=="E")) {
              //  checked for boundries
                console.log("Rover cant move forward in this direction! Moving on to the next command.");
          } else if ((rover.direction=="N" && field[(rover.y)-1][rover.x]=="F") || 
                     (rover.direction=="W" && field[rover.y][(rover.x)-1]=="F") || 
                     (rover.direction=="S" && field[(rover.y)+1][rover.x]=="F") || 
                     (rover.direction=="E" && field[rover.y][(rover.x)+1]=="F")) {
                     //  checked for obstacles
                console.log("Can't move forward! Obstacle detected ahead!");
                return -1;
          } else {
              rover.travelLog.push([rover.x,rover.y]);
              board[rover.y][rover.x]="o";
              moveForward(rover);
              board[rover.y][rover.x]=rover.badgeNumber;
          };
          break;
          
        case "b": 
          if ((rover.y==10 && rover.direction=="N") || 
              (rover.x==10 && rover.direction=="W") || 
              (rover.y==0 && rover.direction=="S") || 
              (rover.x==0 && rover.direction=="E")) {
              //  checked for boundries
                  console.log("Rover cant move backward! Moving on to the next command.");
          } else if ((rover.direction=="N" && field[(rover.y)+1][rover.x]=="F") || 
                     (rover.direction=="W" && field[rover.y][(rover.x)+1]=="F") || 
                     (rover.direction=="S" && field[(rover.y)-1][rover.x]=="F") || 
                     (rover.direction=="E" && field[rover.y][(rover.x)-1]=="F")) {
                     //  checked for obstacles
                  console.log("Can't move backward! Obstacle detected behind!");
                  return -1;
          } else {
              rover.travelLog.push([rover.x,rover.y]);
              board[rover.y][rover.x]="o";
              moveBackward(rover);
              board[rover.y][rover.x]=rover.badgeNumber;
          };
          break;
          
        case "l":
          turnLeft(rover);
          break;
          
        case "r":
          turnRight(rover);
          break;
          
        default:
          console.log(`${command[i]} is not a valid command! Ignored!`);
          break;
      };
    };
  //  rover.travelLog.forEach( function(position){
  //    console.log(`X:${position[0]},Y:${position[1]}`)
  //  })
    console.log(rover.travelLog);
  }
  
  //moveRover(marsRoverKata1,"rffrfflfrff");
  //moveRover(marsRoverKata1,board,"rffrfflfrff");
  
  //this is the moveRover for a mulltiplayer field
  /*function moveRover(rover,field,command) {
      if (!(command[0]=="f" || command[0]=="r" || command[0]=="l")){
        console.log(`${command[0]} is not a valid command! Try again with a valid command string!`);
        return -1;
      }
      switch (command[0]) {
        case "f": 
          if ((rover.y==0 && rover.direction=="N") || 
              (rover.x==0 && rover.direction=="W") || 
              (rover.y==10 && rover.direction=="S") || 
              (rover.x==10 && rover.direction=="E")) {  
              //  checked for boundries
                console.log("Rover cant move forward! Moving on to the next command.");
          } else if ((rover.direction=="N" && field[(rover.y)-1][rover.x]=="F") || 
                     (rover.direction=="W" && field[rover.y][(rover.x)-1]=="F") || 
                     (rover.direction=="S" && field[(rover.y)+1][rover.x]=="F") ||
                     (rover.direction=="E" && field[rover.y][(rover.x)+1]=="F")) {  
                     //  checked for obstacles
                console.log("Can't move forward! Obstacle detected ahead!");
                return -1;
          } else if ((rover.direction=="N" && field[(rover.y)-1][rover.x]!="o") || 
                     (rover.direction=="W" && field[rover.y][(rover.x)-1]!="o") || 
                     (rover.direction=="S" && field[(rover.y)+1][rover.x]!="o") || 
                     (rover.direction=="E" && field[rover.y][(rover.x)+1]!="o")) {  
                     // checked for other players
                console.log("Can't move forward! Another player is blocking the path!");
                return -1;
          }  else {
              rover.travelLog.push([rover.x,rover.y]);
              board[rover.y][rover.x]="o";
              moveForward(rover);
              board[rover.y][rover.x]=rover.badgeNumber;
          };
          break;
          
        case "b": 
          if ((rover.y==10 && rover.direction=="N") || 
              (rover.x==10 && rover.direction=="W") || 
              (rover.y==0 && rover.direction=="S") || 
              (rover.x==0 && rover.direction=="E")) {
              //  checked for boundries
                  console.log("Rover cant move backward! Moving on to the next command.");
          } else if ((rover.direction=="N" && field[(rover.y)+1][rover.x]=="F") || 
                     (rover.direction=="W" && field[rover.y][(rover.x)+1]=="F") || 
                     (rover.direction=="S" && field[(rover.y)-1][rover.x]=="F") || 
                     (rover.direction=="E" && field[rover.y][(rover.x)-1]=="F")) {
                     //  checked for obstacles
                  console.log("Can't move backward! Obstacle detected behind!");
                  return -1;
          } else if ((rover.direction=="N" && field[(rover.y)+1][rover.x]!="o") || 
                     (rover.direction=="W" && field[rover.y][(rover.x)+1]!="o") || 
                     (rover.direction=="S" && field[(rover.y)-1][rover.x]!="o") || 
                     (rover.direction=="E" && field[rover.y][(rover.x)-1]!="o")) {
                     //  checked for other players
                  console.log("Can't move backward! Another player is blocking the path!");
                  return -1;
          }  else {
              rover.travelLog.push([rover.x,rover.y]);
              board[rover.y][rover.x]="o";
              moveBackward(rover);
              board[rover.y][rover.x]=rover.badgeNumber;
          };
          break;
          
        case "l":
          turnLeft(rover);
          break;
          
        case "r":
          turnRight(rover);
          break;
          
        default:
          console.log(`${command[i]} is not a valid command! Ignored!`);
          break;
      };
    console.log(rover.travelLog);
  } */
  
  //array of players
  //let contenders = [[marsRoverKata1,"rffrflffrff"],[marsRoverKata2,"lfffflfrfff"],[marsRoverKata3,"lfffflfrfff"]];
  
  // this function supervises the turns
  /*function play(conten,field) {
    let totalMoves = 0;
    conten.forEach(function(arr){
      totalMoves += arr[1].length;
    });
    let turn = 0;
    for (let j=0; j< totalMoves; j++){
      turn = j % (conten.length) ;   
      moveRover(conten[turn][0],field,conten[turn][1]);
      len = conten[j][1].length;
      conten[j][1] = conten[j][1].substring(1,len);
    }
  } */