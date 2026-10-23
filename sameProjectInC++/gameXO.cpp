#include <iostream>
using namespace std;



class GameXo{
public:
char player = 'X';
char area[3][3] = {{'.','.','.'},{'.','.','.'},{'.','.','.'}};

int box=0;
void setPlayer(char pl);
char getPlayer();
void checkWin();


void printArea();
char changeArea(int row ,int col, char pl);


GameXo(){
cout << "The Game Started" << endl;
}
~GameXo(){
cout << "The Game stoped" << endl;
}
}; 

class Area : public GameXo{
    public:
void printArea (){
    for (short int i = 0; i < 3; i++)
    {

    for (short int j = 0; j < 3; j++)
    {
        box++;
        cout << " box["<< box << "] | "<< area[i][j]<< " | ";
    }
    cout << "\n";
}
}
 void changeArea(int row ,int col, char pl){
for (short int i = 0; i < 3; i++)
{
    
    for (short int j = 0; j < 3; j++)
    {
        if(j==col && i ==row){
            if(area[row][col]=='.'){

                area[row][col] = pl;
                if(player=='X'){
            player='O';
}
else if(player=='O'){
    player='X';
}
            } else {
            cout << "\n Sorry you can't put here" << endl;
        }
    }
    }
}
 }

};

class Player : public GameXo
{
    public:
    void setPlayer(char pl){
        player = pl;
    }
    char getPlayer(){
        return player;
    }
};
int main (){
    Area Game;
    Player pl;
    int row = 0;
    int col = 0;

    do 
    {
        
        
        
        Game.printArea();
        
        
cout << "\n turn " << pl.getPlayer() << endl;


cout << " choose where you want put your  " << pl.getPlayer() << endl;
cout << "\nRow-\n";
cin>>row;
cout << "\ncol-\n";
cin>>col;
Game.changeArea(row,col,pl.getPlayer());



}while (true);

return 0;
}