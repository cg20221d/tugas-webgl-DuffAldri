#include <stdio.h>

int main() {
    int menu;

    do {
        printf("Cari: 1. gradien, 2. x, 3. y, 0. exit \n");
        scanf("%d", &menu);

        if(menu == 1) {
            float x1, x2, y1, y2;
            float gradient;
            
            printf("x1 = ");
            scanf("%f", &x1);

            printf("x2 = ");
            scanf("%f", &x2);

            printf("y1 = ");
            scanf("%f", &y1);

            printf("y2 = ");
            scanf("%f", &y2);

            gradient = (y2 - y1) / (x2 - x1);
            printf("gradient = %f\n\n", gradient);
        } else if(menu == 2) {
            float x1, x2, y1, y2;
            float gradient;

            printf("x1 = ");
            scanf("%f", &x1);

            printf("y1 = ");
            scanf("%f", &y1);

            printf("y2 = ");
            scanf("%f", &y2);

            printf("gradient = ");
            scanf("%f", &gradient);

            x2 = ((y2-y1) / gradient) + x1;
            printf("x2 = %f\n\n", x2);
        } else if(menu == 3) {
            float x1, x2, y1, y2;
            float gradient;

            printf("x1 = ");
            scanf("%f", &x1);

            printf("y1 = ");
            scanf("%f", &y1);

            printf("x2 = ");
            scanf("%f", &x2);

            printf("gradient = ");
            scanf("%f", &gradient);

            y2 = gradient * (x2 - x1) + y1;
            printf("y2 = %f\n\n", y2);
        }
    } while(menu != 0);
    return 0;
}