# 13-states-timer

Objectif : découvrir les states et certaines fonctions avancées de React Native

1. Créer un composant **Clock** qui retourne une vue avec un texte centré horizontalement et verticalement
2. Ajoutez un state **date** à votre composant avec une valeur initiale à null.
3. Ajoutez le hook **useEffect** à votre composant et à l'intérieur de celui-ci lancer un timer (**setInterval**) qui permet de donner l'heure courante au state toutes les secondes
4. Faites en sorte que le timer s'arrête lorsque le composant disparaît de l'écran
5. Affichez la date au format local "hh:mm:ss".

-----

installer la navigation

$ npm install @react-navigation/native @react-navigation/native-stack

$ expo install react-native-screens react-native-safe-area-context
