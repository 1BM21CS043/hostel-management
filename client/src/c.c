c
#include <stdio.h>
#include <stdlib.h>

struct node {
    int USN;
    char Name[20];
    struct node *prev;
    struct node *next;
};

struct node *head = NULL;

void insert(int USN, char Name[]) {
    struct node *newNode = (struct node *)malloc(sizeof(struct node));
    newNode->USN = USN;
    strcpy(newNode->Name, Name);
    newNode->prev = NULL;
    newNode->next = head;
    if (head != NULL) {
        head->prev = newNode;
    }
    head = newNode;
}

void removeUSN(int USN) {
    struct node *temp = head;
    while (temp != NULL) {
        if (temp->USN == USN) {
            if (temp->prev != NULL) {
                temp->prev->next = temp->next;
            }
            if (temp->next != NULL) {
                temp->next->prev = temp->prev;
            }
            if (temp == head) {
                head = temp->next;
            }
            free(temp);
            return;
        }
        temp = temp->next;
    }
    printf("USN not found\n");
}

void printList() {
    struct node *temp = head;
    while (temp != NULL) {
        printf("%d %s\n", temp->USN, temp->Name);
        temp = temp->next;
    }
}

int main() {
    insert(1, "John");
    insert(2, "Doe");
    insert(3, "Alice");
    insert(4, "Bob");
    printf("Original List: \n");
    printList();
    removeUSN(3);
    printf("List after removing USN 3: \n");
    printList();
    return 0;
}
