### TL;DR

* Κάιρο 1.0 πρώτη κυκλοφορία είναι εδώ!
* Οι προγραμματιστές μπορούν να αρχίσουν να γράφουν και να δοκιμάζουν προγράμματα του Καΐρου 1.0
* Η ισοτιμία με την παλαιότερη έκδοση του Καΐρου θα επιτευχθεί τις επόμενες εβδομάδες
* Η υποστήριξη των συμβάσεων της StarkNet θα προστεθεί στην επερχόμενη έκδοση του StarkNet Alpha

### Φόντο

Είμαστε ενθουσιασμένοι να ανακοινώσουμε ότι η πρώτη δημόσια έκδοση του Καΐρου 1.0 είναι τώρα διαθέσιμη. Αυτό σηματοδοτεί ένα σημαντικό ορόσημο στην εξέλιξη του Καΐρου, που εισήχθη για πρώτη φορά το 2020 ως Turing-πλήρης γλώσσα προγραμματισμού για την αποτελεσματική συγγραφή STARK-αποδείξιμα προγράμματα. Το Κάιρο 1.0 είναι μια γλώσσα υψηλού επιπέδου. Όπως Rust, έχει ως στόχο να επιτρέψει στους προγραμματιστές να γράψουν εύκολα κώδικα που είναι αποτελεσματικός και ασφαλής.

Από την ίδρυσή του, το Κάιρο έχει χρησιμοποιηθεί για την κατασκευή εφαρμογών Layer-2 που έχουν[χειριστεί](https://dashboard.starkware.co/starkex)πάνω από $790 δισεκατομμύρια σε συναλλαγές, επεξεργάστηκε πάνω από 300 εκατ. συναλλαγές και έκοψε πάνω από 90 εκατ. NFT, όλα εκτελούνται εκτός αλυσίδας και εγκαταστάθηκαν στο Ethereum με τη μαθηματική ακεραιότητα που εγγυάται η STARK αποδείξεις. Το Κάιρο έγινε η 4η πιο χρησιμοποιούμενη γλώσσα προγραμματισμού στο blockchain[οικοσύστημα](https://defillama.com/languages)γενικότερα. Με την απελευθέρωση του Καΐρου 1. , στόχος μας είναι να κάνουμε τη γλώσσα ακόμα πιο προσιτή και φιλική προς το χρήστη, εισάγοντας επίσης νέα χαρακτηριστικά που ενισχύουν την ασφάλεια και την ευκολία.

Μία από τις πιο σημαντικές αλλαγές στο Κάιρο 1.0 είναι η σύνταξη. Έχουμε εμπνευστεί από την**Rust**για να δημιουργήσουμε μια πιο φιλική προς τον προγραμματιστή γλώσσα που είναι πιο εύκολο να διαβαστεί και να γραφτεί. Η νέα έκδοση του Καΐρου επιτρέπει την εγγραφή ασφαλέστερου κώδικα (έντονα πληκτρολογημένο, ιδιοκτησιακό και δανεισμό κλπ), ενώ παράλληλα είναι πιο εκφραστική.

Το Κάιρο 1.0 εισάγει επίσης τη Σιέρρα, μια νέα ενδιάμεση αναπαράσταση που εξασφαλίζει**κάθε**τρέξιμο του Καΐρου μπορεί να αποδειχθεί. Αυτό καθιστά το Κάιρο 1.0 ιδιαίτερα κατάλληλο για χρήση σε ένα δίκτυο χωρίς δικαιώματα όπως το StarkNet, όπου μπορεί να παρέχει ισχυρή προστασία DoS και αντίσταση λογοκρισίας. Μπορείτε να διαβάσετε περισσότερα για τη Σιέρα στην[προηγούμενη](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)ανάρτησή μας.

## Πρώτη γεύση!

### Τι μπορείτε να κάνετε σήμερα?

Οι προγραμματιστές μπορούν να αρχίσουν να γράφουν, να μεταγλωττίσουν και να δοκιμάσουν προγράμματα Cairo 1.0! Ενθαρρύνουμε τους προγραμματιστές να αρχίσουν να πειραματίζονται με το Κάιρο 1.0 και να εξοικειωθούν με τη νέα σύνταξη και χαρακτηριστικά.

Από το Κάιρο 1.0 εξακολουθεί να αναπτύσσεται ενεργά και νέες λειτουργίες προστίθενται συνεχώς, ελέγξτε το[αποθετήριο του Καΐρου](https://github.com/starkware-libs/cairo/)για τις τελευταίες ενημερώσεις.

### Τι είναι το επόμενο?

Προς το παρόν, το Κάιρο 1. εξακολουθεί να λείπει μερικά από τα χαρακτηριστικά που υποστηρίζονται στην παλαιότερη έκδοση του Κάιρου ([δείτε αυτόν τον πίνακα για λεπτομέρειες](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)). Το επόμενο ορόσημο μας, που αναμένεται τις επόμενες εβδομάδες, θα παρέχει στο Κάιρο 1,0 ισοτιμία χαρακτηριστικό με την παλαιότερη έκδοση. Μπορείτε να παρακολουθείτε την πρόοδο προς αυτό το ορόσημο[εδώ](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md).

### Υποστήριξη Starknet

Υποστηρίζεται η συγγραφή συμβάσεων StarkNet στο Κάιρο 1.0 (αν και ορισμένες λειτουργίες εξακολουθούν να λείπουν). Ωστόσο, η StarkNet δεν υποστηρίζει ακόμη την ανάπτυξη και εκτέλεση συμβάσεων του Καΐρου 1.0. Το StarkNet Alpha V0.11.0, προγραμματισμένο κατά τις προσεχείς εβδομάδες, θα εισαγάγει τη δυνατότητα ανάπτυξης και εκτέλεσης συμβάσεων στο Κάιρο 1.0. Η αναβάθμιση σε v0.11.0 θα σηματοδοτήσει την έναρξη της Μεταβατικής Περιόδου προς ένα σύστημα που εκτελεί μόνο συμβάσεις του Κάιρο 1.0. Αυτή η μεταβατική περίοδος θα λήξει με την[Regenesis](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4), η οποία αναμένεται λίγους μήνες αργότερα.

![](/assets/0_odxbxeacqdwizlfw.jpg)

### Ας χτιστούμε!

Στόχος του StarkNet είναι η εκθετική κλίμακα του Ethereum χρησιμοποιώντας τη μαθηματική ακεραιότητα των STARKs, και ο στόχος του Καΐρου είναι να κάνει αυτή την εκθετική κλίμακα προσβάσιμη στους προγραμματιστές. Προσβασιμότητα σημαίνει μια γλώσσα προγραμματισμού που είναι αποτελεσματική, ευανάγνωστη και γραφή, και ασφαλής στη χρήση. Ελπίζουμε ότι η απελευθέρωση του Καΐρου 1.0 θα εμπνεύσει ακόμα περισσότερους προγραμματιστές για να ενταχθούν στο StarkNet και την κλίμακα Ethereum για να καλύψουν την παγκόσμια ζήτηση.