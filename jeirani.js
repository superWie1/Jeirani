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
    alert(`ნიჩია!`)
}else if(computerChoise == 'ქვა' && userChoise == 'ქაღალდი'){
    alert(`საღოლ, მოიგე <69`)
}else if(computerChoise == 'ქვა' && userChoise == 'მაკრატელი'){
    alert=(`თავიდან სცადე შჩ!`)
}

if(computerChoise == 'ქაღალდი' && userChoise == 'ქაღალდი'){
    alert(`ნიჩია!`)
}else if(computerChoise == 'ქაღალდი' && userChoise == 'ქვა'){
    alert(`საღოლ, მოიგე <69`)
}else if(computerChoise == 'ქაღალდი' && userChoise == 'მაკრატელი'){
    alert=(`თავიდან სცადე შჩ!`)
}

if(computerChoise == 'მაკრატელი' && userChoise == 'მაკრატელი'){
    alert(`ნიჩია!`)
}else if(computerChoise == 'მაკრატელი' && userChoise == 'ქაღალდი'){
    alert(`საღოლ, მოიგე <69`)
}else if(computerChoise == 'მაკრატელი' && userChoise == 'ქვა'){
    alert=(`თავიდან სცადე შჩ!`)
}
