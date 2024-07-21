#include<iostream>
using namespace std;
struct node {
   int data;
   struct node *next;
};
struct node *head = NULL;
struct node *current = NULL;
void printList(){
   struct node *p = head;
   cout << "\n[";
   while(p != NULL) {
      cout << " " << p->data << " ";
      p = p->next;
   }
   cout << "]";
}
void insertatbegin(int data){
   struct node *lk = (struct node*) malloc(sizeof(struct node));
   lk->data = data;
   lk->next = head;
   head = lk;
}
void insertatend(int data){
   struct node *lk = (struct node*) malloc(sizeof(struct node));
   lk->data = data;
   struct node *linkedlist = head;
   while(linkedlist->next != NULL)
      linkedlist = linkedlist->next;
   linkedlist->next = lk;
}
void insertafternode(struct node *list, int data){
   struct node *lk = (struct node*) malloc(sizeof(struct node));
   lk->data = data;
   lk->next = list->next;
   list->next = lk;
}
void deleteatbegin(){
   head = head->next;
}
void deleteatend(){
   struct node *linkedlist = head;
   while (linkedlist->next->next != NULL)
      linkedlist = linkedlist->next;
   linkedlist->next = NULL;
}
void deletenode(int key){
   struct node *temp = head, *prev;
   if (temp != NULL && temp->data == key) {
      head = temp->next;
      return;
   }
   while (temp != NULL && temp->data != key) {
      prev = temp;
      temp = temp->next;
   }
   if (temp == NULL) return;
   prev->next = temp->next;
}
int searchlist(int key){
   struct node *temp = head;
   while(temp != NULL) {
      if (temp->data == key) {
         temp=temp->next;
         return 1;
      } else
         return 0;
   }
}
void reverseList(struct node** head){
   struct node *prev = NULL, *cur=*head, *tmp;
   while(cur!= NULL) {
      tmp = cur->next;
      cur->next = prev;
      prev = cur;
      cur = tmp;
   }
   *head = prev;
}
int main(){

}
