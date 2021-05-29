var computerChoise = Math.floor(Math.random()*3);
if(computerChoise == 0){
    computerChoise = 'ქვა'
}else if(computerChoise ==1){
    computerChoise = 'ქაღალდი'
}else if(computerChoise == 2){
    computerChoise = 'მაკრატელი'
}

var userChoise = prompt('შეიყვნა ერთ-ერთი: ქვა, ქაღალდი, მაკრატელი');
if(computerChoise == 'ქვა' && userChoise == 'ქვა'){
    console.log('ნიჩია!')
}else if(computerChoise == 'ქვა' && userChoise == 'ქაღალდი'){
    console.log('საღოლ, მოიგე <69')
}else if(computerChoise == 'ქვა' && userChoise == 'მაკრატელი'){
    console.log('თავიდან სცადე!')
}

if(computerChoise == 'ქაღალდი' && userChoise == 'ქაღალდი'){
    console.log('ნიჩია!')
}else if(computerChoise == 'ქაღალდი' && userChoise == 'ქვა'){
    console.log('საღოლ, მოიგე <69')
}else if(computerChoise == 'ქაღალდი' && userChoise == 'მაკრატელი'){
    console.log('თავიდან სცადე!')
}

if(computerChoise == 'მაკრატელი' && userChoise == 'მაკრატელი'){
    console.log('ნიჩია!')
}else if(computerChoise == 'მაკრატელი' && userChoise == 'ქაღალდი'){
    console.log('საღოლ, მოიგე <69')
}else if(computerChoise == 'მაკრატელი' && userChoise == 'ქვა'){
    console.log('თავიდან სცადე!')
}